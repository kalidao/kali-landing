import { styled } from './stitches.config'
// import { stars } from './animation'

const Blob = styled('div', {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  position: 'absolute',
  zIndex: '-1',

  '@media (prefers-reduced-motion: no-preference)': {
    // animation: `${stars} 0.5s linear 0ms infinite alternate`,
    filter: 'contrast(155%) brightness(160%)',
    background: 'linear-gradient(85deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(img/noise.svg)',
  },
})

export default Blob
