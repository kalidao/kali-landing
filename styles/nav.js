import { styled } from './stitches.config'

export const NavBox = styled('div', {
  width: '100%',
  height: '5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '10px',
})

export const NavLink = styled('a', {
  color: '$foreground',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '19px',

  '&:hover': {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '$green100',
  },
})
