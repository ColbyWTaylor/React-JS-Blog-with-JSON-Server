import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("cheese sauce");

  useEffect(() => {
    // npx json-server --watch data/db.json --port 8000  <<<< in new port to avoid conflict with port running node
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title={"All Blog Posts"} />}
      <button onClick={() => setName("Luigi")}>change name</button>

      {name}
    </div>
  );
};

export default Home;
