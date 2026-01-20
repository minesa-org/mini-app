import { CommandBuilder, type CommandInteraction, type InteractionCommand } from "@minesa-org/mini-interaction";

const test: InteractionCommand = {
	data: new CommandBuilder().setName("test").setDescription("testing"),
	handler: async (interaction: CommandInteraction) => {
		console.log("[HANDLER] deferReply çağrılıyor...");
		interaction.deferReply();

		console.log("[HANDLER] 3 saniye bekleniyor...");
		await new Promise(resolve => setTimeout(resolve, 3000));

		console.log("[HANDLER] editReply çağrılıyor...");
		console.log("[HANDLER] sendFollowUp mevcut mu?", typeof interaction.sendFollowUp);

		await interaction.editReply({
			content: `testing works`,
		});

		console.log("[HANDLER] editReply tamamlandı");
	}
}

export default test;