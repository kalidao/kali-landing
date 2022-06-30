import { keyframes } from '@stitches/react'

export const stars = keyframes({
  '0%': {
    backgroundSize: '550px 550px, 50px 50px, 250px 250px, 150px 150px',
    backgroundImage:
      'radial-gradient(rgba(255, 33, 255, 0.22), rgba(255,255,255,0) 1px, transparent 1px), radial-gradient(rgba(22, 255, 255, 0.33), rgba(255,255,255,0.044) 1px, transparent 1px), radial-gradient(rgba(255, 255, 22, 0.55), rgba(255,255,255,.066) 2px, transparent 1px), radial-gradient(rgba(22,255,255,.23), rgba(255,255,255,.077) 1px, transparent 1px)',
  },
  '25%': {
    backgroundSize: '350px 350px, 150px 150px, 550px 550px, 550px 550px',
    backgroundImage:
      'radial-gradient(rgba(255, 33, 255, 0.22), rgba(255,255,255,0.022) 1px, transparent 1px), radial-gradient(rgba(22, 255, 255, 0.33), rgba(255,255,255,.0) 1px, transparent 1px), radial-gradient(rgba(255, 255, 22, 0.44), rgba(255,255,255,.055) 2px, transparent 1px), radial-gradient(rgba(22,255,255,.23), rgba(255,255,255,.077) 1px, transparent 1px)',
  },
  '50%': {
    backgroundSize: '250px 250px, 250px 250px, 150px 150px, 450px 450px',
    backgroundImage:
      'radial-gradient(rgba(255, 33, 255, 0.22), rgba(255,255,255,0.033) 1px, transparent 1px), radial-gradient(rgba(22, 255, 255, 0.33), rgba(255,255,255,.022) 1px, transparent 1px), radial-gradient(rgba(255, 255, 22, 0.33), rgba(255,255,255,.044) 2px, transparent 1px), radial-gradient(rgba(22,255,255,.23), rgba(255,255,255,.077) 1px, transparent 1px)',
  },
  '75%': {
    backgroundSize: '150px 150px 350px 350px, 50px 50px, 350px 350px',
    backgroundImage:
      'radial-gradient(rgba(255, 33, 255, 0.22), rgba(255,255,255,0.044) 1px, transparent 1px), radial-gradient(rgba(22, 255, 255, 0.33), rgba(255,255,255,.033) 1px, transparent 1px), radial-gradient(rgba(255, 255, 22, 0.22), rgba(255,255,255,.033) 2px, transparent 1px), radial-gradient(rgba(22,255,255,.23), rgba(255,255,255,.077) 1px, transparent 1px)',
  },
  '100%': {
    backgroundSize: '50px 50px, 550px 550px, 350px 350px, 250px 250px',
    backgroundImage:
      'radial-gradient(rgba(255, 33, 255, 0.22), rgba(255,255,255,0.055) 1px, transparent 1px), radial-gradient(rgba(22, 255, 255, 0.33), rgba(255,255,255,.088) 1px, transparent 1px), radial-gradient(rgba(255, 255, 22, 0.11), rgba(255,255,255,.066) 2px, transparent 1px), radial-gradient(rgba(22,255,255,.23), rgba(255,255,255,.077) 1px, transparent 1px)',
  },
})
export const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

export const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

export const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
})

export const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
})

export const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
})

export const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
})

export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

export const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})
