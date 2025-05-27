import schemaImage from "@/assets/api/schema.png";

export function APISchema() {
	return (
		<section className="w-full bg-background py-20 px-4 md:px-6 lg:px-8">
			<div className="container mx-auto max-w-6xl">
				{/* Section Header */}
				<div className="mb-16 space-y-6">
					<div className="text-sm">[ Under the hood ]</div>
					<h2 className="text-4xl md:text-5xl font-bold text-white">To Keep a Secret</h2>
					<p className="text-lg font-satoshi max-w-3xl">
						Whether you're looking to integrate AI models to enhance your chatbot, AI agents, or your innovative apps,
						our API is designed to be easy to use while preserving your users privacy.
					</p>
				</div>

				{/* Schema Image */}
				<div className="flex justify-center">
					<img src={schemaImage} alt="LibertAI API Architecture Schema" className="max-w-full h-auto" />
				</div>
			</div>
		</section>
	);
}
