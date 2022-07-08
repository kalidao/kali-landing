import React from 'react'
import { NavLink } from '../styles/nav'
import { CtaButton } from '../styles/cta'

export default function Nav() {
  return (
    <div style={{
      width: '98%',
      height: '5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: '10px',
    }}>
      <NavLink href="https://docs.kalidao.xyz/" target="_blank" rel="noreferrer noopener">
        Docs
      </NavLink>
      <NavLink href="https://mirror.xyz/kalico.eth" target="_blank" rel="noreferrer noopener">
        Blog
      </NavLink>
     {/* <CtaButton /> */}
    </div>
  )
}
