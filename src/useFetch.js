// import React, { useState, useEffect } from "react";

// // setting the api link
// export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_KEY}`;


// /* plz subsribe to thapa technical channel 
//           https://www.youtube.com/thapatechnical
//          */

// const useFetch = (apiParams) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState({ show: "false", msg: "" });
//   const [movie, setMovie] = useState(null);

//   const getMovie = async (url) => {
//     setIsLoading(true);
//     try {
//       const res = await fetch(url);
//       const data = await res.json();

//       console.log(data);
//       if (data.Response === "True") {
//         setIsLoading(false);
//         setMovie(data.Search || data);
//         setIsError({ show: "false", msg: "" });
//       } else {
//         setIsError({ show: "true", msg: data.Error });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // debouncing in react js
//   useEffect(() => {
//     let timeOut = setTimeout(() => {
//       getMovie(`${API_URL}&s=${apiParams}`);
//     }, 1000);
//     console.log("set");
//     return () => {
//       clearTimeout(timeOut);
//       console.log("clear");
//     };
//   }, [apiParams]);

//   return { isLoading, isError, movie };
// };

// export default useFetch;
import React, { useState, useEffect } from "react";

// Setting the API link
export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_KEY}`;

const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState(null);

  const getMovie = async (param) => {
    setIsLoading(true);

    try {
      // If the search input is empty, pick a random default keyword
      const defaultKeywords = ["batman", "avengers", "joker", "iron man", "matrix", "mission", "spiderman", "godfather"];
      const query = param && param.trim() !== "" ? param : defaultKeywords[Math.floor(Math.random() * defaultKeywords.length)];

      const finalUrl = `${API_URL}&s=${query}`;

      const res = await fetch(finalUrl);
      const data = await res.json();

      console.log("Fetched Data:", data);

      if (data.Response === "True") {
        setMovie(data.Search || data);
        setIsError({ show: "false", msg: "" });
      } else {
        setIsError({ show: "true", msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Fetch Error:", error);
      setIsError({ show: "true", msg: "Something went wrong!" });
      setIsLoading(false);
    }
  };

  // Debouncing in React
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(apiParams);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [apiParams]);

  return { isLoading, isError, movie };
};

export default useFetch;

