import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [isErr, setErr] = useState(null);

  useEffect(() => {
const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url,{signal : abortCont.signal})
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
          if(err.name === 'AbortError'){
            console.log("Fetch Aborted");
          }else{
            setPending(false);
            setErr(err.message);
          }
        });
    }, 1000);

    return ()=>abortCont.abort();
  }, [url]);

  return{
      data ,isPending,isErr
  }
};


export default useFetch;
