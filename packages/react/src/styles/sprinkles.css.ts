import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { vars } from './index.css'

const { colors, fonts, fontSizes, fontWeights, lineHeights, radii, space } =
  vars

const responsiveProperties = defineProperties({
  properties: {
    fontSize: fontSizes,
    fontWeight: fontWeights,
    fontFamily: fonts,
    lineHeight: lineHeights,
    borderRadius: radii,
    padding: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
  },
})

const unconditionalProperties = defineProperties({
  properties: {
    fontSize: fontSizes,
    fontWeight: fontWeights,
    fontFamily: fonts,
    lineHeight: lineHeights,
    borderRadius: radii,
    padding: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    width: space,
    height: space,
    right: space,
    top: space,
    bottom: space,
    left: space,
    gap: space,
  },
})

const colorProperties = defineProperties({
  properties: {
    color: colors,
    background: colors,
    borderColor: colors,
    borderTopColor: colors,
  },
  defaultCondition: [`light`, `dark`],
  conditions: {
    light: {
      '@media': `(prefers-color-scheme: light)`,
    },
    dark: { '@media': `(prefers-color-scheme: dark)` },
    hover: { selector: `&:hover` },
    focus: { selector: `&:focus` },
  },
})

// const colorProperties = defineProperties({
//   properties: {
//     color: vars.colors,
//     backgroundColor: vars.colors,
//     borderColor: vars.colors,
//   },
//   conditions: {
//     lightMode: {},
//     darkMode: { '@media': '(prefers-color-scheme: dark)' },
//   },
//   defaultCondition: 'lightMode',
//   // defaultCondition: 'lightMode',
//   // conditions: {
//   //   lightMode: {
//   //     '@media': `(prefers-color-scheme: lightColors)`,
//   //   },
//   //   darkMode: { '@media': `(prefers-color-scheme: darkColors)` },
//   // },
// })

export const sprinkles = createSprinkles(
  responsiveProperties,
  unconditionalProperties,
  colorProperties,
)
