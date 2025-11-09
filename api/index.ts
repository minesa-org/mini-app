import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req: VercelRequest, res: VercelResponse) {
	try {
		// Read the index.html file
		const html = readFileSync(join(process.cwd(), "index.html"), "utf-8");

		// Set content type and send HTML
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		res.status(200).send(html);
	} catch (error) {
		console.error("Error serving index.html:", error);
		res.status(500).send("Internal Server Error");
	}
}

