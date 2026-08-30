/** Agent skill doc. The model list is generated so it cannot drift from what the API serves. */
import type { APIRoute } from "astro";
import { loadCatalog, type CatalogModel } from "../../../../lib/catalog.ts";

const tick = (m: CatalogModel, note?: string): string => `\`${m.id}\`${note ? ` (${note})` : ""}`;

export const GET: APIRoute = async () => {
	const { flagship, others } = await loadCatalog();
	const list = [
		tick(flagship, "flagship"),
		...others.map((m) => tick(m, m.id.endsWith("-tee") ? "TEE-served" : undefined)),
	];
	const models = `${list.slice(0, -1).join(", ")}, and ${list.at(-1)}`;

	return new Response(
		`---
name: libertai-api
description: Use LibertAI's OpenAI-compatible confidential inference API for private, decentralized AI model calls (chat completions, embeddings, image generation) with no data logging and verifiable privacy via Trusted Execution Environments.
---

# LibertAI API Skill

This skill teaches agents how to call LibertAI's confidential inference API. LibertAI is an OpenAI-compatible, pay-per-token API running open-source models on decentralized infrastructure (Aleph Cloud) with TEE-backed privacy and no data logging.

## When to use this skill

- You need a private, decentralized LLM backend instead of OpenAI/Anthropic.
- You want OpenAI-compatible calls with no vendor lock-in.
- Your workload must not be logged, trained on, or exposed to a centralized provider.
- You need open-source models (e.g. ${flagship.name}, ${others.at(-1)?.name}) with transparent pricing.

## Base URL and authentication

- Base URL: \`https://api.libertai.io/v1\`
- Auth: \`Authorization: Bearer <LIBERTAI_API_KEY>\` (create keys at https://console.libertai.io)
- Alternative auth: You can also use x402 payments, using the \`@libertai/x402\` npm package in TypeScript or \`libertai-x402\` pypi package in Python
- Compatibility: Drop-in replacement for the OpenAI SDK. Set \`baseURL\` / \`base_url\` and \`api_key\`.

## Chat completions (OpenAI-compatible)

\`\`\`bash
curl https://api.libertai.io/v1/chat/completions \\
  -H "Authorization: Bearer $LIBERTAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${flagship.id}",
    "messages": [
      {"role": "user", "content": "Say hello"}
    ]
  }'
\`\`\`

Python (OpenAI SDK):

\`\`\`python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.libertai.io/v1",
    api_key=os.environ["LIBERTAI_API_KEY"],
)

resp = client.chat.completions.create(
    model="${flagship.id}",
    messages=[{"role": "user", "content": "Say hello"}],
)
print(resp.choices[0].message.content)
\`\`\`

## Models

Current text models include ${models}. Image generation and search are also available. See the live list and pricing at https://docs.libertai.io/apis/text/#pricing.

## References

- Docs: https://docs.libertai.io
- Console / API keys: https://console.libertai.io
- Pricing: https://docs.libertai.io/apis/text/#pricing
- Overview: https://libertai.io/llms.txt
`,
		{ headers: { "Content-Type": "text/markdown; charset=utf-8" } },
	);
};
