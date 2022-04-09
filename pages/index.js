import Head from "next/head";
import Image from "next/image";
import { styled } from "../styles/stitches.config";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainLanding from "../components/MainLanding"
import background from "../public/img/kali-bg.png";

const Layout = styled("div", {
  minHeight: "100vh",
  background: "#fff",
});

export default function Home() {
  return (
    <>
    <Head>
      <title>KALI</title>
      <meta property="og:title" content="KALI" key="title" />
    </Head>
    <Layout>
      <Header />
      <Sidebar />
      <MainLanding />
    </Layout>
    <Image src={background.src} layout="fill"  />
    </>
  );
}
