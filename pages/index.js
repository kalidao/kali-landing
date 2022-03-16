import { styled } from "../styles/stitches.config";
import Header from "../components/Header";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Community from "../components/Community";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

const Layout = styled("div", {
  minHeight: "100vh",
  background: "$blackAlpha",
});

export default function Home() {
  return (
    <Layout>
      <Header />
      <CTA />
      <Features />
      <Community />
      <Partners />
      <Footer />
    </Layout>
  );
}
