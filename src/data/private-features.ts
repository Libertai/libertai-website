import chatImage from "@/assets/private/chat.png";
import charactersImage from "@/assets/private/characters.png";
import imagesImage from "@/assets/private/images.png";
import knowledgeImages from "@/assets/private/knowledge.png";
import { BookOpenText, Image, MessageCircle, UserRoundPen } from "lucide-react";

export const privateFeatures = [
	{
		badge: "[ Secrets Kept Private ]",
		title: "Chat Privately",
		feature: {
			icon: MessageCircle,
			title: "Private Chat",
			description:
				"Chat freely with default privacy protection. Your conversations are yours alone; your AI chats are never shared with third parties, corporations, governments, or even us.",
		},
		button: {
			text: "Chat Now",
			href: "https://chat.libertai.io",
		},
		image: {
			src: chatImage,
			alt: "Private Chat",
		},
	},
	{
		badge: "[ Secrets Kept Private ]",
		title: "Speak with Anyone",
		feature: {
			icon: UserRoundPen,
			title: "Custom AI Characters",
			description:
				"Create interactive AI personas with specific traits to enhance immersive storytelling or role-playing in your scenarios, keeping your data encrypted under your control.",
		},
		button: {
			text: "Customize AI",
			href: "https://chat.libertai.io",
		},
		image: {
			src: charactersImage,
			alt: "AI Characters",
		},
	},
	{
		badge: "[ Secrets Kept Private ]",
		title: "Unfiltered Images",
		feature: {
			icon: Image,
			title: "Image Generation",
			description:
				"Bring your creative vision to life with uncensored images and total AI freedom without restrictions. We don’t store your images, track your prompts, or log and train models with your creations.",
		},
		button: {
			text: "Generate Images",
			comingSoon: true,
		},
		image: {
			src: imagesImage,
			alt: "Image Generation",
		},
	},
	{
		badge: "[ Secrets Kept Private ]",
		title: "AI-Accessible Document Drive",
		feature: {
			icon: BookOpenText,
			title: "Knowledge Bases 2.0",
			description:
				"Customize your AI assistants with documents for enriched context into your workflows without compromising your privacy, keeping your data encrypted and under your control.",
		},
		button: {
			text: "Upload Documents",
			comingSoon: true,
		},
		image: {
			src: knowledgeImages,
			alt: "Knowledge Bases",
		},
	},
];
