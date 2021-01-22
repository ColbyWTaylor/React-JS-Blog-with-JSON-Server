import { useState } from "react";

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

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className="blog-body">{blog.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
