import { Spinner, SpinnerProps } from '@setgoh-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      name: 'size',
      description: 'Size',
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<SpinnerProps>

export const Primary: StoryObj<SpinnerProps> = {}
