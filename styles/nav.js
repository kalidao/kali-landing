import { styled } from "./stitches.config";
import {
  enterFromLeft,
  enterFromRight,
  exitToLeft,
  exitToRight,
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
} from "./animation";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  position: "fixed",
  display: "flex",
  justifyContent: "flex-end",
  width: "100vw",
  zIndex: 1,
  top: 0,
});

export const StyledList = styled(NavigationMenuPrimitive.List, {
  all: "unset",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "$black",
  padding: 4,
  borderRadius: 6,
  listStyle: "none",
  boxShadow: `0 2px 10px rgba(19, 19, 21, 0.7)`,
});

const itemStyles = {
  padding: "8px 12px",
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 16,
  color: "$white",
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px $gold` },
  "&:hover": { backgroundColor: "$red" },
};

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: "unset",
  ...itemStyles,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
});

const StyledCaret = styled(CaretDownIcon, {
  position: "relative",
  color: "$gold",
  top: 1,
  "[data-state=open] &": { transform: "rotate(-180deg)" },
  "@media (prefers-reduced-motion: no preference)": {
    transition: "transform 250ms ease",
  },
});

export const StyledTriggerWithCaret = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledCaret aria-hidden />
    </StyledTrigger>
  )
);

export const StyledLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: "block",
  textDecoration: "none",
  lineHeight: 1,
});
export const StyledLinkIcon = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: "flex",
  justifyContent: "space-between",
  paddingRight: "1rem",
  width: "8.5rem",
  textDecoration: "none",
  lineHeight: 1,
});

export const StyledContent = styled(NavigationMenuPrimitive.Content, {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  "@media only screen and (min-width: 600px)": { width: "auto" },
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "250ms",
    animationTimingFunction: "ease",
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
});

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: 10,
  top: "100%",
  overflow: "hidden",
  zIndex: 1,

  "@media (prefers-reduced-motion: no-preference)": {
    transition: "width, transform 250ms ease",
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
});

const StyledArrow = styled("div", {
  position: "relative",
  top: "70%",
  backgroundColor: "$black",
  width: 10,
  height: 10,
  transform: "rotate(45deg)",
  borderTopLeftRadius: 2,
});

const StyledIndicatorArrow = React.forwardRef((props, forwardedRef) => (
  <StyledIndicator {...props} ref={forwardedRef}>
    <StyledArrow />
  </StyledIndicator>
));

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
  position: "relative",
  transformOrigin: "top center",
  marginTop: 10,
  width: "100%",
  backgroundColor: "$black",
  borderRadius: 6,
  overflow: "hidden",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  height: "var(--radix-navigation-menu-viewport-height)",

  "@media only screen and (min-width: 600px)": {
    width: "var(--radix-navigation-menu-viewport-width)",
  },
  "@media (prefers-reduced-motion: no-preference)": {
    transition: "width, height, 300ms ease",
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
});

// Exports
export const NavMenu = StyledMenu;
export const NavMenuList = StyledList;
export const NavMenuItem = NavigationMenuPrimitive.Item;
export const NavMenuTrigger = StyledTriggerWithCaret;
export const NavMenuLink = StyledLink;
export const NavMenuLinkIcon = StyledLinkIcon;
export const NavMenuContent = StyledContent;
export const NavMenuViewport = StyledViewport;
export const NavMenuIndicator = StyledIndicatorArrow;

export const ContentList = styled("ul", {
  display: "grid",
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: "none",
  background: "$black",
  variants: {
    layout: {
      one: {
        "@media only screen and (min-width: 600px)": {
          width: 500,
          gridTemplateColumns: ".75fr 1fr",
        },
      },
    },
  },
});

const ListItem = styled("li", {});

const LinkTitle = styled("div", {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: "$gold",
});

const LinkText = styled("p", {
  all: "unset",
  color: "$gray",
  lineHeight: 1.4,
  fontWeight: "initial",
});

export const ContentListItem = React.forwardRef(
  ({ children, title, ...props }, forwardedRef) => (
    <ListItem>
      <NavMenuLink
        {...props}
        ref={forwardedRef}
        css={{
          padding: 12,
          borderRadius: 6,
          "&:hover": { backgroundColor: "$red" },
        }}
      >
        <LinkTitle>{title}</LinkTitle>
        <LinkText>{children}</LinkText>
      </NavMenuLink>
    </ListItem>
  )
);

export const ContentListItemIcon = React.forwardRef(
  ({ children, title, icon, ...props }, forwardedRef) => (
    <ListItem>
      <NavMenuLink
        {...props}
        ref={forwardedRef}
        css={{
          padding: 12,
          borderRadius: 6,
          "&:hover": { backgroundColor: "$red" },
        }}
      >
        <LinkTitle
          css={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {icon}
          {title}
        </LinkTitle>
        <LinkText>{children}</LinkText>
      </NavMenuLink>
    </ListItem>
  )
);
