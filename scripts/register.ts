import { RoleConnectionMetadataTypes } from "@minesa-org/mini-interaction";
import { mini } from "../api/interactions";

await mini.registerCommands(process.env.DISCORD_BOT_TOKEN!);
await mini.registerMetadata(process.env.DISCORD_BOT_TOKEN!, [
	{
		key: "is_miniapp",
		name: "Is Mini App?",
		description: "Is the user an assistant?",
		type: RoleConnectionMetadataTypes.BooleanEqual,
	},
]);

console.log("Registration complete!");
