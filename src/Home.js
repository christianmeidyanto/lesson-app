import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [isPending,setPending] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        setBlogs(data);
        setPending(false)
      })
    }, 1000);
  },[]);

  return (
    <div className="home">
      {isPending && <p>Loading.....</p>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"}/>}
    </div>
  );
};

export default Home;
