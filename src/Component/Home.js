import React from 'react'

import Banner from './Banner';
import Row from './Row'
import Navbar from "./Navbar";



export default function Home() {

const API_KEY = "c99f40dd645fef5db2d7309292f44d6d";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};


    return (
      <div>
        <Navbar />
        
        <Banner />

        <br />
        <Row
          clas="first"
          title="Netflix Originals"
          fetch={requests.fetchNetflixOriginals}
        />

        <Row title="Top Rated" fetch={requests.fetchTopRated} />
        <Row title="Trending Now" fetch={requests.fetchTrending} />

        <Row title="Action Movies" fetch={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetch={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetch={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetch={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetch={requests.fetchDocumentaries} />
      </div>
    );
}
