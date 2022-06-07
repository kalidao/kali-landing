import { styled } from './stitches.config'

export const Sidebar = styled('div', {
  position: 'absolute',
  width: '5rem',
  height: '100%',
  bottom: '0px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
})

export const SidebarSocial = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'end',
  gap: '10px',
  marginBottom: '2rem',
})

export const SocialIcon = styled('a', {
  '& svg': {
    display: 'inline-block',
    filter: 'invert(97%) sepia(1%) saturate(2665%) hue-rotate(285deg) brightness(119%) contrast(80%)',
  },
})

export const SocialLink = ({ icon, link }) => {
  return (
    <SocialIcon href={link} target="_blank">
      {icon}
    </SocialIcon>
  )
}
