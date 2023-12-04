import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {

  const [movies, setMovies] = useState([]);

  const getMovies = () =>{

    axios.get(`http://localhost:3001/getmovies`)
    .then(result =>{
      setMovies(result.data);

    }).catch(err =>{
      console.log(err.response.data);
    })
  }

  useEffect(() => {
    getMovies();
    }, [])


  return (
    <div>
      <h2>List of Movies</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Description</th>
            <th>Duration (mins)</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.description}</td>
              <td>{movie.duration}</td>
              <td>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  style={{ width: '100px', height: '150px' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
