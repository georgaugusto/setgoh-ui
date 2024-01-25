import { createVar, style } from '@vanilla-extract/css'
import { sprinkles } from '../../styles/sprinkles.css'
import { textStyles } from '../Text/styles.css'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/index.css'

export const stepsSize = createVar()

export const textMultiStepStyle = style([
  textStyles({
    size: 'xs',
  }),
  sprinkles({
    color: 'contentPrimary',
  }),
])

export const stpesStyles = style([
  sprinkles({
    gap: 2,
    marginTop: 1,
  }),
  {
    display: 'grid',
    gridTemplateColumns: `repeat(${stepsSize}, 1fr)`,
  },
])

export const stepStyles = recipe({
  base: sprinkles({
    height: 1,
    borderRadius: 'px',
    background: 'borderOpaque',
  }),
  variants: {
    active: {
      true: {
        backgroundColor: vars.colors.borderSelected,
      },
    },
  },
})
