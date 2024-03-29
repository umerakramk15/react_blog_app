import React from "react";
import Layout from "../../components/Layout/Layout";
import Container from "../../components/Container/Container";
import featued from "../../../public/featued.svg";
import blogimg from "../../../public/blogimg.svg";
import PopularPost from "../../components/PopularPost/PopularPost";
import NewsLetter from "../../components/newsletter/NewsLetter";
function SingleBlog() {
  return (
    <Layout>
      <Container>
        <div className="px-28 py-10">
          <h1 className="text-normal text-black font-medium pt-6">
            Development{" "}
            <span className="text-black/70 pl-6">16 March 2023</span>
          </h1>
          <h2 className="xl:text-5xl md:pt-10 pt-3  lg:text-4xl  md:text-2xl sm:text-2xl text-xl text-black/80 font-bold pb-6">
            How to make a Game look more attractive with New VR & <br /> AI
            Technology
          </h2>
        </div>
        <div className="h-full w-full z-0 md:pb-10">
          <img src={featued} alt="" className="w-full z-9" />
        </div>
        <div className="px-28 py-10">
          <p className="md:text-xl text-black font-thin ">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone. <br /> <br /> We’re now at a
            pivotal moment in our AI journey. Breakthroughs in generative AI are
            fundamentally changing how people interact with technology — and at
            Google, we’ve been responsibly developing large language models so
            we can safely bring them to our products. Today, we’re excited to
            share our early progress. Developers and businesses can now try new
            APIs and products that make it easy, safe and scalable to start
            building with Google’s best AI models through Google Cloud and a new
            prototyping environment called MakerSuite. And in Google Workspace,
            we’re introducing new features that help people harness the power of
            generative AI to create, connect and collaborate.
          </p>
        </div>
        <div className="flex justify-center pt-10">
          <p className="md:text-xl text-black font-thin w-[70%] border-l-4 border-purple-500 px-10 py-5">
            “People worry that computers will get too smart and take over the
            world, but the real problem is that they’re too stupid and they’ve
            already taken over the world.”
          </p>
        </div>
        <div className="px-28 py-10">
          <p className="md:text-xl text-black font-thin ">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone. <br /> <br /> We’re now at a
            pivotal moment in our AI journey. Breakthroughs in generative AI are
            fundamentally changing how people interact with technology — and at
            Google, we’ve been responsibly developing large language models so
            we can safely bring them to our products. Today, we’re excited to
            share our early progress. Developers and businesses can now try new
            APIs and products that make it easy, safe and scalable to start
            building with Google’s best AI models through Google Cloud and a new
            prototyping environment called MakerSuite. And in Google Workspace,
            we’re introducing new features that help people harness the power of
            generative AI to create, connect and collaborate.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="  h-full w-[70%] z-0 md:pb-10">
            <img src={blogimg} alt="" className="w-full z-9" />
          </div>
        </div>
      </Container>
      <PopularPost></PopularPost>
      <NewsLetter></NewsLetter>
    </Layout>
  );
}

export default SingleBlog;
