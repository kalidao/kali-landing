import { Landing, Heading, SubHeading } from '../styles/main'
import { Text } from '../styles/Text'
import { CtaButton } from '../styles/cta'

export default function MainLanding() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      minHeight: '85vh',
      paddingLeft: '40px',
      gap: '20px'
    }}>
      <Text variant='heading'>New Net Stuctures</Text>
      {/* <Text as='h2' variant='subheading'>
        KALI launches crypto-native organizations. Invest, build and collaborate with anyone, anywhere.
      </Text> */}
      <div style={{ maxWidth: '25rem', display: 'flex', gap: '1rem' }}>
        <CtaButton />
      </div>
    </div>
  )
}
