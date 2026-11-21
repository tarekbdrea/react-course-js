import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MovieList from "./components/MovieList.jsx";
import { movies } from "./data/movies.js";

function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [visibleCount, setVisibleCount] = useState(4);

  const topRated = movies.filter(movie => movie.rating >= 8.7);

  const genres = movies
    .map(movie => movie.genre)
    .filter((genre, index, all) => all.indexOf(genre) === index);

  let shownMovies = movies;
  if (onlyAvailable) {
    shownMovies = shownMovies.filter(movie => movie.available);
  }
  if (selectedGenre !== "all") {
    shownMovies = shownMovies.filter(movie => movie.genre === selectedGenre);
  }

  const visibleMovies = shownMovies.slice(0, visibleCount);

  function toggleAvailable() {
    setOnlyAvailable(!onlyAvailable);
  }

  function showMore() {
    setVisibleCount(visibleCount + 4);
  }

  return (
    <>
      <Header />
      <main className="page container">
        <section className="page__intro">
          <h1>הקטלוג</h1>
          <p>סרטים שכדאי לראות — הישנים הטובים והחדשים.</p>
        </section>

        <MovieList title="הכי מדורגים" movies={topRated} />

        <div className="toolbar">
          <button
            className={onlyAvailable ? "btn btn--active" : "btn"}
            onClick={toggleAvailable}
          >
            רק זמינים לצפייה
          </button>

          <span className="toolbar__divider"></span>

          <button
            className={selectedGenre === "all" ? "btn btn--active" : "btn"}
            onClick={() => setSelectedGenre("all")}
          >
            הכל
          </button>
          {genres.map(genre => (
            <button
              key={genre}
              className={selectedGenre === genre ? "btn btn--active" : "btn"}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        <MovieList
          title={`כל הסרטים (${shownMovies.length})`}
          movies={visibleMovies}
        />

        {visibleCount < shownMovies.length && (
          <div className="more">
            <button className="btn" onClick={showMore}>
              הצג עוד
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;