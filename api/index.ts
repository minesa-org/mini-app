import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readFileSync } from "fs";
import { join } from "path";
import { generateOAuthUrl } from "@minesa-org/mini-interaction";

export default function handler(req: VercelRequest, res: VercelResponse) {
	try {
		const { url } = generateOAuthUrl(
			{
				appId: process.env.DISCORD_APPLICATION_ID!,
				appSecret: process.env.DISCORD_CLIENT_SECRET!,
				redirectUri: process.env.DISCORD_REDIRECT_URI!,
			},
			["identify", "role_connections.write"],
		);

		let html = readFileSync(join(process.cwd(), "index.html"), "utf-8");
		html = html.replace("{{OAUTH_URL}}", url);

		res.setHeader("Content-Type", "text/html; charset=utf-8");
		res.status(200).send(html);
	} catch (error) {
		console.error("Error serving index.html:", error);
		res.status(500).send("Internal Server Error");
	}
}
