import type { Preview } from '@storybook/react'
import '@setgoh-ui/css'
import {
  darkThemeClass,
  lightThemeClass,
} from '@setgoh-ui/react/src/styles/index.css'

import { themes } from '@storybook/theming'
import React from 'react'

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview

const withTheme = (Story, context) => {
  const themeStyles =
    context?.globals?.backgrounds?.value === '#F8F8F8'
      ? 'styles_lightThemeClass__1ll0af760'
      : 'styles_darkThemeClass__1ll0af761'

  return React.createElement(
    'div',
    { className: themeStyles },
    React.createElement(Story, context),
  )
}

export const decorators = [withTheme]
