import Header from "../components/Header";
import { styled } from "../styles/stitches.config";

const Layout = styled("div", {
  minHeight: "100vh",
  background: "$blackAlpha",
});

export default function Home() {
  return (
    <Layout>
      <Header />
    </Layout>
  );
  // Navigation
  // CTA
  // Features
  // Testimonials
  // Partners
  // Footer
}
