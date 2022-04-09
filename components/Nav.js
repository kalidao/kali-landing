import React from "react";
import { NavBox, NavRight, NavLink } from "../styles/nav";
import { Heading } from "../styles/header";
import { CtaButton } from "../styles/cta";


export default function Nav() {
  return <NavBox>
    <Heading>KALI</Heading>
    <NavRight>
      <NavLink href="https://docs.kalidao.xyz/" target="_blank" rel="noreferrer noopener">Docs</NavLink>
      <NavLink href="https://mirror.xyz/kalico.eth" target="_blank" rel="noreferrer noopener">Blog</NavLink>
      <CtaButton />
    </NavRight>
  </NavBox>;
}

