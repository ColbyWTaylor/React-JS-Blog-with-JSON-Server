const BlogList = (props) => {
  const blogs = props.blogs;
  // console.log(props, blogs);

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

export default BlogList;
