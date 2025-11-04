import {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	CommandBuilder,
	CommandContext,
	CommandInteraction,
	IntegrationType,
	MiniComponentMessageActionRow,
	type MiniInteractionCommand,
} from "@minesa-org/mini-interaction";

const ping: MiniInteractionCommand = {
	data: new CommandBuilder()
		.setName("ping")
		.setDescription("Replies with pong and a button")
		.setContexts([CommandContext.Guild])
		.setIntegrationTypes([IntegrationType.GuildInstall])
		.toJSON(),

	handler: async (interaction: CommandInteraction) => {
		const row = new ActionRowBuilder<MiniComponentMessageActionRow>()
			.addComponents(
				new ButtonBuilder()
					.setCustomId("ping:pong")
					.setLabel("Pong?")
					.setStyle(ButtonStyle.Primary),
			)
			.toJSON();

		return interaction.reply({ content: "Pong!", components: [row] });
	},
};

export default ping;
