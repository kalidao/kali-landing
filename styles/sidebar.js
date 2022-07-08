import { styled } from './stitches.config'

export const Sidebar = styled('div', {
  bottom: '0',
  display: 'flex',
  gap: '15px',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '1rem',
})

export const SocialIcon = styled('a', {
  '& svg': {
    display: 'inline-block',
    filter: 'invert(97%) sepia(1%) saturate(2665%) hue-rotate(285deg) brightness(119%) contrast(80%)',

    '&:hover': {
      filter: 'invert(81%) sepia(0%) saturate(0%) hue-rotate(332deg) brightness(103%) contrast(91%)',
    },
  },
})

export const SocialLink = ({ icon, link }) => {
  return (
    <SocialIcon href={link} target="_blank">
      {icon}
    </SocialIcon>
  )
}
