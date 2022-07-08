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
      <Text css={{
        fontFamily: 'Bold',
        fontSize: '180px',
        fontWeight: '700',
        color: '$foreground',

        '@media (max-width: 1168px)': {
          fontSize: '110px',
        },
      }}>New Net Stuctures</Text>
      <div style={{ maxWidth: '25rem', display: 'flex', gap: '1rem' }}>
        <CtaButton />
      </div>
    </div>
  )
}
