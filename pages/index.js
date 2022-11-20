import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Layout from "../components/UI/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  );
}
