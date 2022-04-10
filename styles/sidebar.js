import { styled } from "./stitches.config";

export const Sidebar = styled('div', {
    position: "absolute",
    width: "5rem",
    height: "100%",
    bottom: "0px",
    borderRight: "1px solid #dddddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
})

export const SidebarSocial = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    gap: "10px",
    marginBottom: "2rem",
})

export const SocialLink = ({icon, link}) => {
    return (
        <a href={link} target="_blank">
            {icon}
        </a>
    )
}



