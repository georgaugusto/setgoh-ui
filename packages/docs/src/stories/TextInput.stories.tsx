import { Box, Text, TextInput, TextInputProps } from "@setgoh-ui/react";
import { space } from "@setgoh-ui/tokens";
import { StoryObj, Meta } from "@storybook/react";

export default {
	title: "Form/Text input",
	component: TextInput,
	args: {
		disabled: false,
		isErrored: false,
	},
	argTypes: {
		disabled: {
			control: { type: "boolean" }
		},
		size: {
			options: ["sm", "md", "lg"],
			control: {
				type: "inline-radio"
			}
		},
		prefix: {
			control: { type: "text" }
		},
		isErrored: {
			control: { type: "boolean" }
		},
	},
	decorators: [
		(Story) => {
			return (
				<Box as="label" style={{ display: "flex", flexDirection: "column", gap: space[2] }}>
					<Text size="sm">Email address</Text>
					{Story()}
				</Box>
			);
		}
	]
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
	args: {
		placeholder: "Type your name",
	}
};

export const Disabled: StoryObj<TextInputProps> = {
	args: {
		disabled: true
	}
};

export const Error: StoryObj<TextInputProps> = {
	args: {
		isErrored: true
	}
};

export const WithPrefix: StoryObj<TextInputProps> = {
	args: {
		prefix: "call.com/",
		placeholder: "your-username"
	}
};