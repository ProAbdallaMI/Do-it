import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
	base: "/Do-it/",
	plugins: [
		react(),
		tailwindcss(),
		mkcert(),
		VitePWA({
			registerType: "autoUpdate",
			manifest: {
				name: "Do it",
				short_name: "Do-it",
				description: "task management app",
				theme_color: "#ffffff",
				background_color: "#ffffff",
				display: "standalone",
				start_url: "/Do-it/",
				scope: "/Do-it/",
				icons: [
					{
						src: "/Do-it/pwa-192x192.png",
						sizes: "200x200",
						type: "image/png",
					},
				],
			},
		}),
	],
	server: {
		port: 5173,
		host: "0.0.0.0",
	},
});
