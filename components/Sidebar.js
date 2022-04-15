import {Sidebar as SidebarLayout, SidebarSocial, SocialLink} from "../styles/sidebar"
import { DiscordIcon, GitHubIcon, MirrorIcon, TwitterIcon } from "../styles/socialIcons"

export default function Sidebar() {
  return <SidebarLayout>
    <SidebarSocial>
      <SocialLink icon={<MirrorIcon />} link="https://mirror.xyz/kalico.eth" />
      <SocialLink icon={<TwitterIcon />} link="https://twitter.com/_KaliDAO" />
      <SocialLink icon={<DiscordIcon />} link="https://discord.gg/qWVRw4StaC" />
      <SocialLink icon={<GitHubIcon />} link="https://github.com/kalidao/" />
    </SidebarSocial>
  </SidebarLayout>
}
