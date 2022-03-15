import Header from "../components/Header";
import CTA from "../components/CTA";
import { styled } from "../styles/stitches.config";
import Testimonials from "../components/Testimonials";

const Layout = styled("div", {
  minHeight: "100vh",
  background: "$blackAlpha",
});

export default function Home() {
  return (
    <Layout>
      <Header />
      <CTA />
      <Testimonials />
    </Layout>
  );
  // Navigation
  // CTA
  // Features
  // Testimonials
  // Partners
  // Footer
}
