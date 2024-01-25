import { Heading, HeadingProps } from '@setgoh-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom title',
    size: 'md',
    as: 'h2',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
    as: {
      options: ['h1', 'h2', 'h3'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, headomg will always be `h2`, but because it is changed by the `as` property',
      },
    },
  },
}
