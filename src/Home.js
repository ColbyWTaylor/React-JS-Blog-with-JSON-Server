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

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title={"All Blog Posts"}
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "cheese sauce")}
        title={"Cheese Blogs"}
      />
    </div>
  );
};

export default Home;
