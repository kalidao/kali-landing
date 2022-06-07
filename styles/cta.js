import { styled } from './stitches.config'

export const Button = styled('button', {
  backgroundColor: '$purple500',
  color: '$foreground',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '35px',
  border: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '6px 14px',
  gap: '7px',
  zIndex: '100',
  pointerEvents: 'auto',

  // text
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '19px',

  '&:hover': {
    backgroundColor: '$purple600',
  },
})

export const ArrowUpIcon = () => {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <rect width="19" height="19" fill="white" style={{ mixBlendMode: 'multiply' }} />
      <path
        d="M5.9375 3.5625V4.75H13.4128L3.5625 14.6003L4.39969 15.4375L14.25 5.58719V13.0625H15.4375V3.5625H5.9375Z"
        fill="white"
      />
    </svg>
  )
}

export const CtaButton = () => {
  const clickHandler = () => {
    window.open('https://app.kalidao.xyz/', '_blank')
  }

  return (
    <Button onClick={clickHandler}>
      Launch App
      <ArrowUpIcon />
    </Button>
  )
}
