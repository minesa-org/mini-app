import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const distSrcDir = path.join(distDir, "src");

if (!existsSync(distSrcDir)) {
	process.exit(0);
}

const entries = readdirSync(distSrcDir, { withFileTypes: true });

for (const entry of entries) {
	const sourcePath = path.join(distSrcDir, entry.name);
	const targetPath = path.join(distDir, entry.name);

	// Remove stale artefacts before copying updated files
	rmSync(targetPath, { recursive: true, force: true });
	cpSync(sourcePath, targetPath, { recursive: true });
}

rmSync(distSrcDir, { recursive: true, force: true });
