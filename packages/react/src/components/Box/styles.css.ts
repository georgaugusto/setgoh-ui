import { style } from '@vanilla-extract/css'

import { sprinkles } from '../../styles/sprinkles.css'
import { vars } from '../../styles/index.css'

export const boxContainer = style([
  sprinkles({
    padding: 4,
    borderRadius: 'md',
    background: 'backgroundPrimary',
  }),
  {
    border: `2px solid ${vars.colors.borderOpaque}`,
  },
])
