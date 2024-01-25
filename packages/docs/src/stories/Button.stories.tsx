import { Box, Button, ButtonProps } from '@setgoh-ui/react'
import { StoryObj, Meta } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Buttons are interface elements that allow the user to initiate a specific action. They are identified by a label that indicates what action will be performed when the user clicks or taps the button.',
      },
    },
  },
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    auto: false,
    loading: false,
    disabled: false,
    color: 'white',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: ['white', 'black', 'red', 'yellow', 'green', 'blue'],
      control: {
        type: 'inline-radio',
      },
    },
    auto: {
      name: 'auto',
      description: 'Expand button to 100% width',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'isDisabled',
      description: 'Disable button',
      control: {
        type: 'boolean',
      },
    },
    loading: {
      name: 'loading',
      description: 'Show a loading',
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
  },
  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
