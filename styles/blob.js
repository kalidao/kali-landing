import { styled } from './stitches.config'

const Blob = styled('div', {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  position: 'absolute',
  zIndex: '-1',
  background:
    'radial-gradient(circle at top left, $purple500, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at bottom right, $yellow400, rgba(255, 255, 255, 0) 15%)',
  '@bp2': {
    background:
      'radial-gradient(circle at 15% 50%, $purple100, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $yellow100, rgba(255, 255, 255, 0) 25%)',
  },
})

export default Blob
