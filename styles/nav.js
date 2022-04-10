import { styled } from "./stitches.config";

export const NavBox = styled('div', {
    position: "absolute",
    right: "0px",
    width: "100%",
    paddingLeft: "7rem",
    display: "flex",
    justifyContent: "space-between",
});

export const NavRight = styled('div', {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "0px 25px",
});

export const NavLink = styled('a', {
    color: "#000",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "19px",

    '&:hover': {
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "$green"
    }
});