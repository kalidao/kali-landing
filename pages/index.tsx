import Head from 'next/head'
import Nav from '../components/Nav'
import MainLanding from '../components/MainLanding'
import Blob from '../styles/blob';

export default function Home() {
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
        <MainLanding />
        </div>
        {/* <Features />
        <Partners />
        <Sidebar /> */}
      </div>
      <Blob />
    </>
  )
}
