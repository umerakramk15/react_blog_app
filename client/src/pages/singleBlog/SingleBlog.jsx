import React from "react";
import Layout from "../../components/Layout/Layout";
import Container from "../../components/Container/Container";

function SingleBlog() {
  return (
    <Layout>
      <Container>
        <h1 className="text-normal text-blackfont-normal pt-6">
          Development <span className="text-black/70 pl-6">16 March 2023</span>
        </h1>
        <div></div>
      </Container>
    </Layout>
  );
}

export default SingleBlog;
