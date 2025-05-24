import alephLogo from "@/assets/home/aleph/logo.svg";
import backgroundImage from "@/assets/home/aleph/background.png";
import MuxPlayer from "@mux/mux-player-react";

export function AlephSection() {
	return (
		<section
			className="w-full py-20 px-4 md:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className="container mx-auto">
				{/* Section Header */}
				<div className="mb-16 space-y-6 text-center">
					<div className="text-sm">[ Freedom Unleashed ]</div>
					<h2>Freedom to Create, Code, and Connect</h2>
					<p className="text-lg max-w-2xl font-satoshi mx-auto">
						Break free with LibertAI, the decentralized AI platform that puts you in control. Powered by Aleph Cloud’s
						secure, distributed computing, our open-source models and tools—chat, characters, agents, API and
						more—deliver confidential intelligence without compromising your privacy.
					</p>
				</div>

				<div className="flex flex-col items-center space-y-12">
					<div className="w-full max-w-lg">
						<MuxPlayer
							playbackId="9Pusq66jUu501jcYVqisWOksfuIsHymy7vS4EKCvRfuw"
							// autoPlay
							muted
							loop
							metadata={{
								video_title: "libertai-landing",
							}}
						/>
					</div>
					<div className="flex space-x-3">
						<p className="font-satoshi text-lg">Proudly powered by</p>
						<img src={alephLogo} alt="Aleph Cloud" />
					</div>
				</div>
			</div>
		</section>
	);
}
