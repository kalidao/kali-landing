import React from "react";
import { styled } from "../styles/stitches.config";
import {
  NavMenu,
  NavMenuList,
  NavMenuLink,
  NavMenuTrigger,
  NavMenuItem,
  NavMenuContent,
  ContentList,
  ContentListItem,
  NavMenuViewport,
  NavMenuIndicator,
} from "../styles/nav";

const ViewportPosition = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  top: "100%",
  left: 0,
  perspective: "2000px",
});

export default function Nav() {
  return (
    <NavMenu>
      <NavMenuList>
        <NavMenuItem>
          <NavMenuTrigger>Resources</NavMenuTrigger>
          <NavMenuContent>
            <ContentList layout="one">
              <ContentListItem title="Docs" href="" target="_blank">
                Learn the inner workings of a Kali DAO.
              </ContentListItem>
              <ContentListItem title="Blog" href="" target="_blank">
                Read about our vision for DAOs.
              </ContentListItem>
              <ContentListItem
                title="GitHub"
                href="https://github.com/kalidao/"
                target="_blank"
              >
                Browse our open-source codebase.
              </ContentListItem>
            </ContentList>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuTrigger>Community</NavMenuTrigger>
          <NavMenuContent>
            <ContentList layout="one">
              <ContentListItem
                title="Twitter"
                href="https://twitter.com/_KaliDAO"
                target="_blank"
              >
                Keep updated with the latest in KALI.
              </ContentListItem>
              {/* TODO: ADD DISCORD */}
              <ContentListItem title="Discord" href="" target="_blank">
                Participate in our community.
              </ContentListItem>
            </ContentList>
          </NavMenuContent>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuLink href="https://app.kalidao.xyz/" target="_blank">
            Launch App
          </NavMenuLink>
        </NavMenuItem>
        <NavMenuIndicator />
      </NavMenuList>
      <ViewportPosition>
        <NavMenuViewport />
      </ViewportPosition>
    </NavMenu>
  );
}

// Community
// Docs
// Launch App
