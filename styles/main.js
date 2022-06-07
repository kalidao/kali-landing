import { styled } from './stitches.config'

export const Heading = styled('div', {
  fontWeight: '700',
  fontSize: '6em',
  lineHeight: '1.2em',
  zIndex: '999',
  color: '$foreground',
})

export const SubHeading = styled('div', {
  fontWeight: '400',
  fontSize: '2em',
  zIndex: '999',
})

export const Landing = styled('div', {
  position: 'absolute',
  top: '10vh',
  paddingLeft: '7rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',
  pointerEvents: 'none',
  width: '80%',
})
