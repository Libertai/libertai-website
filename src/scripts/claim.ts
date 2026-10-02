/**
 * /claim: carries the booth code (`?e=`) into the console claim link, then reads
 * the campaign's public status and adjusts the offer card (event name, amounts,
 * open / upcoming / closed / full). The static markup is the default offer, so
 * a failed or slow fetch simply leaves it in place.
 */
import { initReveals } from "./lib/reveals.ts";

const API = "https://inference.api.libertai.io";
const CONSOLE = "https://console.libertai.io";
const CHAT = "https://chat.libertai.io";

interface Campaign {
	code: string;
	libertai_amount: number;
	aleph_amount: number;
	credit_validity_days: number;
	status: "open" | "upcoming" | "closed" | "full";
	event: { name: string; starts_at: string; ends_at: string } | null;
}

interface Link {
	label: string;
	href: string;
}

initReveals(0.14);

const bill = document.getElementById("offer");
const raw = new URLSearchParams(location.search).get("e")?.trim() ?? "";
const code = /^[A-Za-z0-9_-]{1,64}$/.test(raw) ? raw : "";

const all = <T extends HTMLElement>(sel: string) => [...document.querySelectorAll<T>(sel)];
const one = <T extends HTMLElement>(sel: string) => document.querySelector<T>(sel);

const signUp: Link = { label: "Sign up", href: CONSOLE };
const freeChat: Link = { label: "Try the free private chat", href: CHAT };

/** Every claim button on the page (hero card + final block) follows the state. */
const setPrimary = ({ label, href }: Link): void => {
	for (const a of all<HTMLAnchorElement>("[data-primary]")) {
		a.href = href;
		const l = a.querySelector("[data-label]");
		if (l) l.textContent = label;
	}
};

const setSecondary = ({ label, href }: Link): void => {
	const a = one<HTMLAnchorElement>("[data-secondary]");
	if (!a) return;
	a.href = href;
	a.textContent = label;
};

const setMessage = (title: string, text: string): void => {
	const msg = one("[data-msg]");
	const t = one("[data-msg-title]");
	const p = one("[data-msg-text]");
	if (!msg || !t || !p) return;
	t.textContent = title;
	p.textContent = text;
	msg.hidden = false;
};

const setStatus = (text: string, off = false): void => {
	const s = one("[data-status]");
	const t = one("[data-status-text]");
	if (!s || !t) return;
	t.textContent = text;
	s.dataset.tone = off ? "off" : "on";
	s.hidden = false;
};

/** No claim possible here: the amounts recede and the buttons point to the normal signup. */
const unavailable = (status: string, title: string, text: string): void => {
	bill?.classList.add("off");
	const fine = one("[data-fine]");
	if (fine) fine.hidden = true;
	setStatus(status, true);
	setMessage(title, text);
	setPrimary(signUp);
	setSecondary(freeChat);
};

const amount = (n: unknown): string | null =>
	typeof n === "number" && Number.isFinite(n) && n > 0 ? (Number.isInteger(n) ? String(n) : n.toFixed(2)) : null;

const when = (iso: string, opts: Intl.DateTimeFormatOptions): string | null => {
	const d = new Date(iso);
	return Number.isNaN(d.getTime()) ? null : new Intl.DateTimeFormat(undefined, opts).format(d);
};

const render = (c: Campaign): void => {
	const lt = amount(c.libertai_amount);
	if (lt) for (const el of all('[data-amt="libertai"]')) el.textContent = lt;
	const al = amount(c.aleph_amount);
	if (al) for (const el of all('[data-amt="aleph"]')) el.textContent = al;
	const days = one("[data-days]");
	if (days && Number.isInteger(c.credit_validity_days) && c.credit_validity_days > 0)
		days.textContent = String(c.credit_validity_days);

	const name = c.event?.name?.trim() ?? "";
	const nameEl = one("[data-event-name]");
	if (name && nameEl) nameEl.textContent = name;
	const forEvent = name ? `for ${name}` : "for this event";

	switch (c.status) {
		case "open":
			setStatus("Open now");
			break;
		case "upcoming": {
			const start = c.event?.starts_at ?? "";
			const short = when(start, { day: "numeric", month: "short" });
			const long = when(start, {
				weekday: "long",
				day: "numeric",
				month: "long",
				hour: "2-digit",
				minute: "2-digit",
				timeZoneName: "short",
			});
			setStatus(short ? `Opens ${short}` : "Opens soon");
			setMessage(
				long ? `Claims open ${long}.` : "Claims open soon.",
				"That's your local time. Come back to this page then; you can create your account now.",
			);
			setPrimary({ label: "Create your account", href: CONSOLE });
			setSecondary({ label: "How it works", href: "#how" });
			break;
		}
		case "closed":
			unavailable(
				"Closed",
				`Claims ${forEvent} have closed.`,
				"You can still sign up and start building, or try the private chat for free.",
			);
			break;
		case "full":
			unavailable(
				"All claimed",
				`Every credit ${forEvent} has been claimed.`,
				"You can still sign up and start building, or try the private chat for free.",
			);
			break;
	}
};

if (!code) {
	// reached without the booth QR code: explain where the code comes from
	setMessage(
		"Scan the QR code at our booth to claim.",
		"The credits come with the code on our banner. No code? You can still sign up and start building.",
	);
	setPrimary(signUp);
	setSecondary(freeChat);
} else {
	setPrimary({ label: "Claim your credits", href: `${CONSOLE}/claim?e=${encodeURIComponent(code)}` });

	const ctrl = new AbortController();
	const timer = setTimeout(() => ctrl.abort(), 8000);
	fetch(`${API}/credits/campaigns/${encodeURIComponent(code)}`, { signal: ctrl.signal })
		.then(async (r) => {
			if (r.ok) return render((await r.json()) as Campaign);
			// a 404 without this detail means the endpoint itself is missing: keep the default offer
			const body = r.status === 404 ? await r.json().catch(() => null) : null;
			if (body?.detail === "Unknown claim code")
				unavailable(
					"Unknown code",
					"We don't recognize this code.",
					"Check the link on the banner, or sign up and start building.",
				);
		})
		.catch(() => {})
		.finally(() => clearTimeout(timer));
}
