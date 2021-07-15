import React from 'react'
import axios from "axios";
export default function Row({title,fetch,clas}) {

    const url = "https://api.themoviedb.org/3";

    const [movie, setMovie] = React.useState([]);
    const getmovies = () => {
      axios
        .get(`https://api.themoviedb.org/3${fetch}`)
        .then((res) => setMovie(res.data))
        .catch((err) => {
          console.error(err);
        });
    };


     
    React.useEffect(() => {
      getmovies();
    }, [movie]);
    return (
      <div>
        <h2 className='titl' style={{marginInline:"40px",color:"white"}}> {title}</h2>
     <br />
     <div className="row_img">
          {movie.results &&
            movie.results.slice(0,6).map((mov) => (
              <div className="i">
                  
                <img
                className={clas}
                  src={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
                  alt=""
                  height="160px"
                  width="247px"
                  style={{borderRadius: "3px"}}
                />
                <br /> <br /> 
              </div>
            ))}
        </div>
      </div>
    );
}
