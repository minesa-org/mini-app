import {
	CommandBuilder,
	ContainerBuilder,
	SectionBuilder,
	TextDisplayBuilder,
	ButtonBuilder,
	ButtonStyle,
	InteractionFlags
} from "@minesa-org/mini-interaction";
import type {
	InteractionCommand,
	CommandInteraction,
} from "@minesa-org/mini-interaction";

const ping: InteractionCommand = {
	data: new CommandBuilder()
		.setName("ping")
		.setDescription("pong"),

	handler: async (interaction: CommandInteraction) => {
		// ACK initial request (Interaction Callback)
		// Set IsComponentsV2 flag here so Discord knows what to expect
		interaction.deferReply({ flags: InteractionFlags.IsComponentsV2 });

		// Build the V2 hierarchy correctly
		const container = new ContainerBuilder()
			.addComponent(
				new SectionBuilder()
					.addComponent(
						new TextDisplayBuilder()
							.setContent("This is a test message using Components V2.")
					)
					.setAccessory(
						new ButtonBuilder()
							.setCustomId("ping_button")
							.setLabel("Pong")
							.setStyle(ButtonStyle.Primary)
					)
			);

		// Edit the reply via Webhook (PATCH /messages/@original)
		await interaction.editReply({
			components: [container]
		});
	},
};

export default ping;
