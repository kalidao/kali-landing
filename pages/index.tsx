import Head from 'next/head'
import { styled } from '../styles/stitches.config'
import Sidebar from '../components/Sidebar'
import Nav from '../components/Nav'
import MainLanding from '../components/MainLanding'
import Layout from '../styles/layout'
import Blob from '../styles/blob';

export default function Home() {
  return (
    <>
      <Head>
        <title>KALI</title>
        <meta property="og:title" content="KALI" key="title" />
        <meta name="viewport" content="width=800" />
      </Head>
      <Layout>
        <Nav />
        <Sidebar />
        <MainLanding />
      </Layout>
      <Blob />
    </>
  )
}
