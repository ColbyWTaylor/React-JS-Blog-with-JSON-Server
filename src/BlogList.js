import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="home">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className="blog-body">{blog.body}</div>
          <Link to={`/blogs/${blog.id}`}>Go to post</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
