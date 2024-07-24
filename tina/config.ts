import { defineConfig } from "tinacms";
import page from "./collections/page";
import post from "./collections/post";

export const config = defineConfig({
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	branch:
		process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
		process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
		process.env.HEAD, // Netlify branch env
	token: process.env.TINA_TOKEN,
	media: {
		loadCustomStore: async () => {
			const pack = await import("next-tinacms-cloudinary");
			return pack.TinaCloudCloudinaryMediaStore;
		},
    accept: ['video/mp4']
	},
	build: {
		publicFolder: "public", // The public asset folder for your framework
		outputFolder: "admin", // within the public folder
	},
	schema: {
		collections: [page, post],
	},
});

export default config;