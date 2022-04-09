import { styled } from "./stitches.config";

export const Heading = styled('div', {
    fontWeight: "700",
    fontSize: "6em",
    lineHeight: "1.2em",
    zIndex: "999",
    color: "#000",

    // position: "absolute",
    // left: "20vw",
    // top: "6vh"

})

export const SubHeading = styled('div', {
    fontWeight: "400",
    fontSize: "2em",
    zIndex: "999"
})

export const Landing = styled('div', {
    // top right bottom left
    margin: "10px 0px 0px 100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px"
})