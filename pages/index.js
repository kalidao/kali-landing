import Head from 'next/head'
import { styled } from '../styles/stitches.config'
import Sidebar from '../components/Sidebar'
import Nav from '../components/Nav'
import MainLanding from '../components/MainLanding'

const Layout = styled('div', {
  minHeight: '100vh',
})

const Blob = styled('div', {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  position: 'absolute',
  zIndex: '-1',
  background:
    'radial-gradient(circle at top left, $purple500, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at bottom right, $yellow400, rgba(255, 255, 255, 0) 15%)',
  '@bp2': {
    background:
      'radial-gradient(circle at 15% 50%, $purple100, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $yellow100, rgba(255, 255, 255, 0) 25%)',
  },
})

export default function Home() {
  return (
    <>
      <Head>
        <title>KALI</title>
        <meta property="og:title" content="KALI" key="title" />
        <meta name="viewport" content="width=800" />
      </Head>
      <Blob />
      <Layout>
        <Nav />
        <Sidebar />
        <MainLanding />
      </Layout>
    </>
  )
}
