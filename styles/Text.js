import { styled } from './stitches.config'

export const Text = styled('div', {
  fontFamily: 'Regular',

  variants: {
    variant: {
      heading: {
        fontFamily: 'Bold',
        fontSize: '180px',

        '@media (min-width: 768px)': {
          fontSize: '120px',
        },
      },
      subheading: {
        fontFamily: 'Regular',
        fontSize: '24px',
      },
    },
  },
})
