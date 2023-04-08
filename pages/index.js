import React from "react";
import Layout from "../components/landingpage/layout";
import Banner from "../components/landingpage/banner";
import Tagline from "../components/landingpage/tagline";
import About from "../components/landingpage/about";
import Counter from "../components/landingpage/counter";
import Services from "../components/landingpage/services";

export default function Index() {
  return (
    <div>
      <Layout>
        <Banner />
        <Tagline />
        <About />
        <Counter />
        <Services />
      </Layout>
    </div>
  );
}
