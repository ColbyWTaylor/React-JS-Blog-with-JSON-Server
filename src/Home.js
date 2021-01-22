import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "new site",
      body: "something something",
      author: "pantera",
      id: 1,
    },
    { title: "really", body: "something something", author: "milk", id: 2 },
    {
      title: "ok awesome",
      body: "something something",
      author: "cheese sauce",
      id: 3,
    },
  ]);

  return <BlogList blogs={blogs} title={"All Blog Posts"} />;
};

export default Home;
