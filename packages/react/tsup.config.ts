import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'
import { defineConfig } from 'tsup'

export default defineConfig({
  esbuildPlugins: [
    vanillaExtractPlugin({
      esbuildOptions: { loader: { '.css': 'empty' } },
    }) as never,
  ],
})
