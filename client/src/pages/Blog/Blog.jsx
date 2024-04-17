import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";

import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import NewsLetter from "../../components/newsletter/NewsLetter";
import CardSkeleton from "../../components/Card/CardSkeleton ";
import { useSelector } from "react-redux";

function Blog() {
  const posts = useSelector((state) => state.allPost.posts);

  return (
    <Layout>
      <Container>
        <div className="h-full w-full md:pb-10 flex flex-col justify-center items-center pt-20">
          <h1 className="font-medium text-blackfont-medium text-black/60">
            OUR BLOGS
          </h1>
          <h1 className="xl:text-5xl   lg:text-2xl  md:text-xl sm:text-2xl text-xl text-black/80 font-bold md:pt-8">
            Find our all blogs from here
          </h1>
          <p></p>
          <p className="md:text-normal text-black font-thin md:pt-6 text-center w-[45%] ">
            our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along
          </p>
        </div>
        <div className="flex flex-wrap md:justify-between justify-center items-center w-full h-auto py-10 my-20 gap-x-20 sm:gap-0">
          {posts.length === 0 ? (
            // Render skeleton if posts are not available
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            // Render actual content if posts are available
            posts.map((post, i) => (
              <Card
                key={i}
                img={post.featuredImage}
                category={post.category.title}
                date={post.date}
                title={post.title}
                description={post.description1.substring(0, 100)}
              />
            ))
          )}
        </div>
      </Container>
      <NewsLetter></NewsLetter>
    </Layout>
  );
}

export default Blog;
