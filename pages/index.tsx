import type { NextPage } from "next";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Counter from "../components/Counter";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Brands from "../components/Brands";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  return (
    <Layout pageTitle="Protfolio - React Next App">
      <Navbar />
      <Banner />
      <Services />
      <Counter />
      <Skills />
      <Projects />
      <Brands />
      <Faq />
      <Contact />
      <CallToAction />
      <Footer />
    </Layout>
  );
};

export default Home;
