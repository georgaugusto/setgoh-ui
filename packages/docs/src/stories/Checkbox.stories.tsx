import { Checkbox, CheckboxProps } from '@setgoh-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    defaultChecked: false,
    disabled: false,
    variant: 'default'
  },
  argTypes: {
    defaultChecked: {
      name: 'defaultChecked',
      description: '`boolean`',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'disabled',
      description: '`boolean`',
      control: {
        type: 'boolean',
      },
    },
     variant: {
      name: 'variant',
      description: '`string`',
      options: ['default', 'positive',],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Selected: StoryObj<CheckboxProps> = {
  args: {
    defaultChecked: true,
    checked: true,
  },
}

export const isDisabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
