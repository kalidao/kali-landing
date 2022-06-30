import { styled } from './stitches.config'
import { stars } from './animation'

const Blob = styled('div', {
  top: 0,
  right: 0,
  bottom: -50,
  left: 0,
  position: 'absolute',
  zIndex: '-1',

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${stars} 0.5s linear 0ms infinite alternate`,
    filter: 'contrast(170%) brightness(1000%)',
    background: 'linear-gradient(317deg, rgba(0,0,0,0.66), rgba(0,0,0,0)), url(img/noise.svg)',
  },

  '&:hover': {
    // filter: 'hue-rotate(90deg)',
    backgroundBlendMode: 'saturation',
  },
})

export default Blob
