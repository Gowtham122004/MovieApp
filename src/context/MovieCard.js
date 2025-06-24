import React from "react";
import { FavoriteContext } from "./FavoriteContext"; // assuming your context hook

const MovieCard = ({ movie }) => {
  const { addToFavorites } = FavoriteContext(); // or however you add favorites

  return (
    <div style={{ 
      border: "1px solid #ccc", 
      margin: "10px", 
      padding: "10px", 
      width: "200px", 
      textAlign: "center",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      borderRadius: "10px"
    }}>
      <img src={movie.Poster} alt={movie.Title} style={{ width: "100%", borderRadius: "5px" }} />
      <h4>{movie.Title}</h4>
      <button 
        onClick={() => addToFavorites(movie)} 
        style={{
          background: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "8px 12px",
          marginTop: "10px",
          cursor: "pointer"
        }}
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default MovieCard;
