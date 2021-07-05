import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [isErr, setErr] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setErr(null);
        })
        .catch((err) => {
          setPending(false);
          setErr(err.message);
        });
    }, 1000);
  }, [url]);

  return{
      data ,isPending,isErr
  }
};


export default useFetch;
