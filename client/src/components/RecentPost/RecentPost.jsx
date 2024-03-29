import React from "react";
import Container from "../Container/Container";
import img1 from "../../../public/img1.svg";
import img2 from "../../../public/img2.svg";
import img3 from "../../../public/img3.svg";
import Card from "../Card/Card";
import featued from "../../../public/featued.svg";
function RecentPost() {
  const blogdata = [
    {
      title: "Train Or Bus Journey?Which one suits?",
      description:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
      date: "13 March 2023",
      category: "Travel",
      img: img1,
    },
    {
      title: "Best Website to research for your  next project",
      description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs  ",
      date: "13 March 2023",
      category: "DEVELOPMENT",
      img: img2,
    },
    {
      title: "How to Be a Dancer in 2023 with proper skills?",
      description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive ",
      category: "Sports",
      date: "13 March 2023",
      img: img3,
    },
  ];
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="xl:text-5xl md:pt-10 pt-3  lg:text-4xl  md:text-2xl sm:text-2xl text-xl text-black/80 font-bold">
              Recent Post
            </h2>
          </div>
          <button
            className=" py-2 px-6 rounded-md border-2 hover:border-purple-500
          text-white bg-purple-500 hover:text-purple-500 hover:bg-white transition-all"
          >
            View all{" "}
          </button>
        </div>
        <div className=" pt-20 flex flex-col md:flex-row md:justify-between md:items-center md:gap-x-10">
          <div className="h-full w-full md:pb-10 flex justify-center items-center">
            <img src={featued} alt="" className="w-full " />
          </div>
          <div className="w-full h-full  ">
            <h1 className="text-normal text-blackfont-normal">
              Development{" "}
              <span className="text-black/70 pl-6">14 March 2024</span>
            </h1>
            <h2 className="xl:text-3xl   lg:text-2xl  md:text-xl sm:text-2xl text-xl text-black/80 font-bold md:pt-3">
              How to make a Game look more attractive with New VR & <br /> AI
              Technology
            </h2>
            <p className="md:text-normal text-black font-thin lg:w-[90%] md:pt-4">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products
            </p>
            <button className="text-purple-500 mt-4 py-2 px-6 rounded-md border-2 border-purple-500 hover:bg-purple-500 hover:text-white transition-all">
              Read More
            </button>
          </div>
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
    </div>
  );
}

export default RecentPost;
