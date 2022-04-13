import { styled } from "./stitches.config";

export const Heading = styled('div', {
    fontWeight: "700",
    fontSize: "6em",
    lineHeight: "1.2em",
    zIndex: "999",
    color: "#000",
})

export const SubHeading = styled('div', {
    fontWeight: "400",
    fontSize: "2em",
    zIndex: "999"
})

export const Landing = styled('div', {
    position: "absolute",
    top: "10vh",
    paddingLeft: "7rem",
    //margin: "10px 0px 0px 100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
    pointerEvents: "none"
})