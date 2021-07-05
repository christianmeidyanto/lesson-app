import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [isPending,setPending] = useState(true);

  const [isErr,setErr]= useState(null);

  useEffect(()=>{
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res=>{
        if (!res.ok) {
          throw Error('could not fetch the data for resource');
        }
        return res.json();
      })
      .then(data=>{
        setBlogs(data);
        setPending(false);
        setErr(null);
      })
      .catch(err =>{
        setPending(false);
        setErr(err.message);
      })
    }, 1000);
  },[]);

  return (
    <div className="home">
      {isErr && <p>{isErr}</p>}
      {isPending && <p>Loading.....</p>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"}/>}
    </div>
  );
};

export default Home;
