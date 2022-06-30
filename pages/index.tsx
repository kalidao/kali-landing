import Head from 'next/head'
import { styled } from '../styles/stitches.config'
import Sidebar from '../components/Sidebar'
import Nav from '../components/Nav'
import MainLanding from '../components/MainLanding'
import Layout from '../styles/layout'
import Blob from '../styles/blob';
import Features from '../components/Features'
import Partners from '../components/Partners'

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
