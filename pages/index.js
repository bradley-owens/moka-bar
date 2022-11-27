import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Story from "../components/Story/Story";
import Layout from "../components/UI/Layout/Layout";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Hero />
        <Story />
        <Services />
      </div>
    </Layout>
  );
}
