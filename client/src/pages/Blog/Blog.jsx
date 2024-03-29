import React from "react";
import Layout from "../../components/Layout/Layout";
import img1 from "../../../public/img1.svg";
import img2 from "../../../public/img2.svg";
import img3 from "../../../public/img3.svg";
import img4 from "../../../public/img4.svg";
import img5 from "../../../public/img5.svg";
import img6 from "../../../public/img6.svg";
import img7 from "../../../public/img7.svg";
import img8 from "../../../public/img8.svg";
import img9 from "../../../public/img9.svg";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import NewsLetter from "../../components/newsletter/NewsLetter";
function Blog() {
  const blogdata = [
    {
      title: "Train Or Bus Journey?Which one suits?",
      description:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
      date: "13 March 2023",
      category: "Travel",
      img: img4,
    },
    {
      title: "Best Website to research for your  next project",
      description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs  ",
      date: "13 March 2023",
      category: "DEVELOPMENT",
      img: img5,
    },
    {
      title: "How to Be a Dancer in 2023 with proper skills?",
      description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ",
      category: "Sports",
      img: img6,
    },
    {
      title: "Train Or Bus Journey?Which one suits?",
      description:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
      date: "13 March 2023",
      category: "Travel",
      img: img7,
    },
    {
      title: "Train Or Bus Journey?Which one suits?",
      description:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
      date: "13 March 2023",
      category: "Travel",
      img: img8,
    },
    {
      title: "Train Or Bus Journey?Which one suits?",
      description:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
      date: "13 March 2023",
      category: "Travel",
      img: img9,
    },
    {
      title: "How to Be a Dancer in 2023 with proper skills?",
      description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ",
      category: "Sports",
      img: img1,
    },
    {
      title: "Train Or Bus Journey?Which one suits?",
      description:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
      date: "13 March 2023",
      category: "Travel",
      img: img2,
    },
    {
      title: "Train Or Bus Journey?Which one suits?",
      description:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
      date: "13 March 2023",
      category: "Travel",
      img: img3,
    },
  ];
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
          {blogdata.map((bd, i) => (
            <>
              <Card
                key={i}
                img={bd.img}
                category={bd.category}
                date={bd.date}
                title={bd.title}
                description={bd.description}
              ></Card>
            </>
          ))}
        </div>
      </Container>
      <NewsLetter></NewsLetter>
    </Layout>
  );
}

export default Blog;
