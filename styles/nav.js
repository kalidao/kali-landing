import { styled } from './stitches.config'
import { mauve } from '@radix-ui/colors'

export const NavLink = styled('a', {
  color: mauve.mauve7,
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '19px',

  '&:hover': {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '$green1',
  },
})
