import { Box, Button, Toast, ToastProps, ToastProvider } from '@setgoh-ui/react'
import { StoryObj, Meta } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    title: 'Toast title',
    description: 'Toast description',
    variant: 'accent',
  },
  argTypes: {
    variant: {
      options: ['accent', 'positive', 'warning', 'negative', 'snackbars'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (_, { allArgs }) => {
      const [open, setOpen] = useState(false)

      function showToast(newState: boolean) {
        setOpen(newState)
      }

      return (
        <ToastProvider>
          <Box>
            <Button onClick={() => showToast(true)}>Show toast</Button>
          </Box>
          <Toast {...allArgs} open={open} onOpenChange={showToast} />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const Success: StoryObj<ToastProps> = {
  args: {
    variant: 'positive',
  },
}

export const Error: StoryObj<ToastProps> = {
  args: {
    variant: 'negative',
  },
}

export const WithIcon: StoryObj<ToastProps> = {
  args: {
    icon: true,
    variant: 'snackbars',
  },
}
