import {
	InteractionReplyFlags,
	MiniInteractionComponent,
} from "@minesa-org/mini-interaction";

const pingButton: MiniInteractionComponent = {
	customId: "ping:pong",

	handler: (interaction) => {
		const username: string | undefined = interaction.member?.user.username;

		return interaction.reply({
			content: `Pong, ${username}!`,
			flags: InteractionReplyFlags.Ephemeral,
		});
	},
};

export default pingButton;
