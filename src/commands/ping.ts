import {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	CommandBuilder,
	ContainerBuilder,
	InteractionCommand,
	InteractionFlags,
	SeparatorBuilder,
	SeparatorSpacingSize,
	StringSelectMenuBuilder,
	StringSelectMenuOptionBuilder,
	TextDisplayBuilder,
	type MessageActionRowComponent,
	type CommandInteraction,
} from "@minesa-org/mini-interaction";

const ping: InteractionCommand = {
	data: new CommandBuilder().setName("test").setDescription("test command"),

	handler: (interaction: CommandInteraction) => {
		const container = new ContainerBuilder()
			.addComponent(new TextDisplayBuilder().setContent("This is a test"))
			.addComponent(
				new SeparatorBuilder()
					.setDivider(true)
					.setSpacing(SeparatorSpacingSize.Large)
			)
			.addComponent(
				new ActionRowBuilder<MessageActionRowComponent>().addComponents(
					new ButtonBuilder()
						.setCustomId("ping_button")
						.setLabel("Pong")
						.setStyle(ButtonStyle.Primary)
				)
			)
			.addComponent(
				new ActionRowBuilder<MessageActionRowComponent>().addComponents(
					new StringSelectMenuBuilder().addOptions(
						new StringSelectMenuOptionBuilder()
							.setLabel("Hello")
							.setDescription("This is hello")
							.setValue("value_hello"),
						new StringSelectMenuOptionBuilder()
							.setLabel("Hi")
							.setDescription("This is hi")
							.setValue("value_hi")
					)
				)
			);

		return interaction.reply({
			components: [container],
			flags: InteractionFlags.IsComponentsV2,
		});
	},
};

export default ping;
