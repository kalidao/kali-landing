import { Landing, Heading, SubHeading } from "../styles/main"
import { CtaButton } from "../styles/cta";

export default function MainLanding() {
  return (
      <Landing>
        <Heading>
            DAO Setup & Incorporation Made Easy
        </Heading>
        <SubHeading>
        KALI launches complete internet-native organizations. Invest, build and collaborate with anyone, anywhere.
        </SubHeading>
        <div style={{maxWidth: "9.15rem"}}>
            <CtaButton />
        </div>
      </Landing>
  )
}

