// Home.jsx

import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import Featured from "../../components/RecentPost/Featured";
import PopularPost from "../../components/PopularPost/PopularPost";
import RecentPost from "../../components/RecentPost/RecentPost";
import NewsLetter from "../../components/newsletter/NewsLetter";

function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <Featured></Featured>
      <RecentPost></RecentPost>
      <PopularPost></PopularPost>
      <NewsLetter></NewsLetter>
    </Layout>
  );
}

export default Home;
