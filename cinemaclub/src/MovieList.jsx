import React from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  return (
    <section>
      <h2>הסרטים שלנו</h2>
      <MovieCard title="Inception" year={2010} rating={8.8} popular = {true} />
      <MovieCard title="Toy Story" year={1995} rating={8.3}popular = {false} />
    </section>
  );
}