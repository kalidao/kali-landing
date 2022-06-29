import { styled } from './stitches.config'

export const Box = styled('div', {
  display: 'grid',
  margin: '0rem 0rem 0rem 0rem',
  zIndex: '10',
  pointerEvents: 'none',
})

export const Cards = styled('div', {
  display: 'flex',
  gap: '1rem',
})

export const Card = styled('div', {
  maxHeight: '25vh',
  minWidth: '10rem',
  color: '$foreground',
})

export const Title = styled('div', {
  fontWeight: '800',
  fontSize: '16px',
  paddingBottom: '1rem',
})

export const Description = styled('div', {})

export const FeatureCard = ({ title, image, description }) => {
  return (
    <Card>
      <img src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  )
}
