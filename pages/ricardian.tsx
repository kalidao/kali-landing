import Head from 'next/head'
import RicardianLanding from '../components/RicardianLanding';
import Nav from '../components/Nav'
import Blob from '../styles/blob';

export default function Ricardian() {
  return (
    <>
      <Head>
        <title>KALI</title>
        <meta property="og:title" content="KALI" key="title" />
        <meta name="viewport" content="width=800" />
      </Head>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div>
        <Nav />
        <RicardianLanding />
        </div>
        {/* <Features />
        <Partners />
        <Sidebar /> */}
      </div>
      <Blob />
    </>
  )
}
