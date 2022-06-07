import React from 'react'
import { styled } from '../styles/stitches.config'
import Socials from './Socials'
import Disclaimer from './Disclaimer'

const Box = styled('div', {
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export default function Footer() {
  return (
    <Box>
      <Socials />
      <Disclaimer />
    </Box>
  )
}
