// import Movie from "./Movie";
// import Search from "./Search";

// const Home = () => {
//   return (
//     <>
//       <div className="container">
//         {/* plz subsribe to thapa technical channel 
//           https://www.youtube.com/thapatechnical
//          */}
//         <Search />
//         <Movie />
//       </div>
//     </>
//   );
// };

// export default Home;
import "./App.css"
import { useEffect } from "react";
import Movie from "./Movie";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context/FavoriteContext"; // if you're using context

const Home = () => {
  useEffect(() => {
    // Set background for Home
    document.body.style.background = 'white'; // light blue or whatever you want

    return () => {
      // Clean up background on unmount
      document.body.style.background = '';
    };
  }, []);

  const { favorites } = useGlobalContext(); // If using localStorage directly, adjust this

  return (
    <>
      <div className="container">
        
       

        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;
