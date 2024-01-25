import type { StorybookConfig } from '@storybook/react-vite'
import { join, dirname } from 'path'

const { mergeConfig } = require('vite')
const path = require('path')

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../src/pages/**/*.mdx', '../src/stories/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [require('@vanilla-extract/vite-plugin').vanillaExtractPlugin()],
      resolve: {
        alias: [
          {
            find: '@setgoh-ui/tokens',
            replacement: path.resolve(__dirname, '../../tokens'),
          },
          {
            find: '@setgoh-ui/react',
            replacement: path.resolve(__dirname, '../../react'),
          },
          {
            find: '@setgoh-ui/css',
            replacement: path.resolve(__dirname, '../../react/dist/index.css'),
          },
        ],
      },
    })
  },
}

export default config
