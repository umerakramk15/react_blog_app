import React from "react";
import img1 from "../../../public/img1.svg";
import img2 from "../../../public/img2.svg";
import img3 from "../../../public/img3.svg";
import img4 from "../../../public/img4.svg";
import img5 from "../../../public/img5.svg";
import img6 from "../../../public/img6.svg";
import img7 from "../../../public/img7.svg";
import img8 from "../../../public/img8.svg";
import img9 from "../../../public/img9.svg";
import Card from "../Card/Card";
import Container from "../Container/Container";

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
    title: "Train Or Bus Journey?Which one suits?",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
    date: "13 March 2023",
    category: "Travel",
    img: img5,
  },
  {
    title: "Train Or Bus Journey?Which one suits?",
    description:
      "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person ",
    date: "13 March 2023",
    category: "Travel",
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
];

function PopularPost() {
  return (
    <div className=" w-full h-[100%]  ">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="xl:text-5xl md:pt-10 pt-3  lg:text-4xl  md:text-2xl sm:text-2xl text-xl text-black/80 font-bold">
              Populor Post
            </h2>
          </div>
          <button
            className=" py-2 px-6 rounded-md border-2 hover:border-purple-500
          text-white bg-purple-500 hover:text-purple-500 hover:bg-white transition-all"
          >
            View all{" "}
          </button>
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

export default PopularPost;
