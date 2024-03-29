import React from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import Featured from "../../components/RecentPost/Featured";
import PopularPost from "../../components/PopularPost/PopularPost";

function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <Featured></Featured>
      <PopularPost></PopularPost>
    </Layout>
  );
}

export default Home;
