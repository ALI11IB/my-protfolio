import type { NextPage } from "next";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Journey from "../components/Journey";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  return (
    <Layout pageTitle="Protfolio - Ali Ibrahem">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Home;
