import React from "react";
import Nav from "./Nav";
import Kali from "./Kali";
import { Header as HeaderLayout } from "../styles/header";

export default function Header() {
  return (
    <HeaderLayout>
      <Kali />
      <Nav />
    </HeaderLayout>
  );
}
