import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { keyframes, style } from '@vanilla-extract/css'
import { sprinkles } from '../../styles/sprinkles.css'

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const toastViewport = style([
  sprinkles({
    gap: 2,
    marginRight: 8,
    marginBottom: 8,
  }),
  {
    position: 'absolute',

    display: 'flex',
    flexDirection: 'column',

    top: 0,
    right: 0,

    listStyle: 'none',
    outline: 'none',
    overflow: 'hidden',

    zIndex: 999999999,
  },
])

const baseToastContainer = style([
  sprinkles({
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,

    gap: 1,
  }),
  {
    width: '22.5rem',

    display: 'flex',
    alignContent: 'space-between',

    borderRadius: '0.375rem',

    selectors: {
      '&[data-state="open"]': {
        animation: slideIn,
        animationDuration: '200ms',
        animationTimingFunction: 'ease-out',
      },
      '&[data-state="closed"]': {
        animation: slideOut,
        animationDuration: '200ms',
        animationTimingFunction: 'ease-out',
      },
    },

    '@media': {
      'screen and (max-width: 568px)': {
        width: '60vw',
      },
    },
  },
])

export const toastContainer = recipe({
  base: baseToastContainer,
  variants: {
    variant: {
      accent: sprinkles({
        background: 'backgroundAccent',
      }),

      positive: sprinkles({
        background: 'backgroundPositive',
      }),

      warning: sprinkles({
        background: 'backgroundWarning',
      }),

      negative: sprinkles({
        background: 'backgroundNegative',
      }),

      snackbars: sprinkles({
        background: 'backgroundInverseSecondary',
      }),
    },
  },

  defaultVariants: {
    variant: 'accent',
  },
})

export type ToastVariants = RecipeVariants<typeof toastContainer>

export const toastIcon = style([
  sprinkles({
    paddingRight: 4,
    color: 'primaryB',
  }),
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
])

export const toastTitle = style([
  sprinkles({
    color: 'primaryB',

    fontFamily: 'default',
    fontSize: 'xl',
    fontWeight: 'bold',
    lineHeight: 'base',

    paddingRight: 4,
  }),
  {
    lineBreak: 'anywhere',
  },
])

export const toastDescription = style([
  sprinkles({
    color: 'primaryB',

    fontFamily: 'default',
    fontSize: 'sm',
    fontWeight: 'regular',
    lineHeight: 'base',
  }),
  {
    lineBreak: 'anywhere',
  },
])

export const ToastButtonClose = style([
  sprinkles({
    color: 'primaryB',
    right: 4,
  }),
  {
    cursor: 'pointer',
    position: 'absolute',
  },
])
