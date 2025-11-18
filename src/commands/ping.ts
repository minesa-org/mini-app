import {
	CommandBuilder,
	type CommandInteraction,
	type MiniInteractionCommand,
} from "@minesa-org/mini-interaction";

const command: MiniInteractionCommand = {
	data: new CommandBuilder().setName("ping").setDescription("pong").toJSON(),

	handler: (interaction: CommandInteraction) => {
		return interaction.reply({ content: "pong!" });
	},
};

export default command;
