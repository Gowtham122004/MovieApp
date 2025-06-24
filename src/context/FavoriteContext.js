// import React, { createContext, useState, useEffect } from "react";

// export const FavoriteContext = createContext();

// export const FavoriteProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const addFavorite = (movie) => {
//     if (!favorites.find((m) => m.imdbID === movie.imdbID)) {
//       setFavorites([...favorites, movie]);
//     }
//   };

//   const removeFavorite = (id) => {
//     setFavorites(favorites.filter((m) => m.imdbID !== id));
//   };

//   return (
//     <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
//       {children}
//     </FavoriteContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect, useContext } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    if (!favorites.find((m) => m.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((m) => m.imdbID !== id));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

// ✅ Export custom hook to use context
export const useGlobalContext = () => useContext(FavoriteContext);
