import Head from "next/head";
import Image from "next/image";
import { styled } from "../styles/stitches.config";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainLanding from "../components/MainLanding"
import Features from "../components/Features";
import background from "../public/img/kali-bg.png";

const Layout = styled("div", {
  minHeight: "100vh",
  background: "#fff",
  position: "relative"
});

const ImageBox = styled('div', {
  pointerEvents: "none",
  zIndex: "-100"
});

export default function Home() {
  return (
    <>
    <Head>
      <title>KALI</title>
      <meta property="og:title" content="KALI" key="title" />
      <meta name="viewport" content="width=800" />
    </Head>
    <Layout>
      <Header />
      <Sidebar />
      <MainLanding />
      <ImageBox>
        <Image src={background.src} layout="fill" priority/>
      </ImageBox>
    </Layout>
    </>
  );
}
