import { styled } from "./stitches.config";

export const Sidebar = styled('div', {
    position: "absolute",
    width: "76px",
    minHeight: "100vh",
    left: "0px",
    top: "0px",
    borderRight: "1px solid #dddddd",
    display: "flex",
})

export const SidebarSocial = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    gap: "10px",
    margin: "3vh 3vh",
})

export const SocialLink = ({icon, link}) => {
    return (
        <a href={link} target="_blank">
            {icon}
        </a>
    )
}



