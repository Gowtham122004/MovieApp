// src/context/Favorites.js (or move to components/)
import React, { useContext } from "react";
import { FavoriteContext } from "./FavoriteContext";
import MovieCard from "./MovieCard";

const Favorites = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div>
      <h2>My Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="movie-list">
          {favorites.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
