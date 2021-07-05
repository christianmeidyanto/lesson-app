import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  
  const {data :blogs,isPending,isErr} = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isErr && <p>{isErr}</p>}
      {isPending && <p>Loading.....</p>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"}/>}
    </div>
  );
};

export default Home;
