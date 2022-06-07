import React from 'react'
import { NavBox, NavLink } from '../styles/nav'
import { CtaButton } from '../styles/cta'

export default function Nav() {
  return (
    <NavBox>
      <NavLink href="https://docs.kalidao.xyz/" target="_blank" rel="noreferrer noopener">
        Docs
      </NavLink>
      <NavLink href="https://mirror.xyz/kalico.eth" target="_blank" rel="noreferrer noopener">
        Blog
      </NavLink>
      <CtaButton />
    </NavBox>
  )
}
