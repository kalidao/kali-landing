import { Landing, Heading, SubHeading } from '../styles/main'
import { CtaButton } from '../styles/cta'
import Features from './Features'
import Partners from './Partners'

export default function MainLanding() {
  return (
    <Landing>
      <Heading>DAO Setup & Incorporation Made Easy</Heading>
      <SubHeading>
        KALI launches crypto-native organizations. Invest, build and collaborate with anyone, anywhere.
      </SubHeading>
      <div style={{ maxWidth: '25rem', display: 'flex', gap: '1rem' }}>
        <CtaButton />
      </div>
      <Features />
      <Partners />
    </Landing>
  )
}