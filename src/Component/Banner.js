import React from 'react'
import axios from 'axios'
export default function Banner() {

    const API_KEY = "c99f40dd645fef5db2d7309292f44d6d";

    const [movie, setMovie] = React.useState([]);
    const getmovies = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
        )
        .then((res) =>
          setMovie(
            res.data.results[
              Math.floor(Math.random() * res.data.results.length - 1)
            ]
          )
        )
        .catch((err) => {
          console.error(err);
        });
    };

    React.useEffect(() => {
      getmovies();
    }, []);
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
console.log(movie)
    return (
      <div
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
          backgroundPosition: "center 0px ",
        }}
        className="banner"
      >
        <div className="ban">
          <h1> {movie.title} </h1>

          <h3> {truncate(movie.overview, 150)}</h3>
          <br />
          <button type="button" class="btn btn-light">
             
            <span> Play</span>
          </button>
          <button
            style={{ opacity: ".9" }}
            type="button"
            class="btn btn-secondary"
          >
            <span>My List</span>
          </button>
        </div>
      </div>
    );
}
