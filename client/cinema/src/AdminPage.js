import React, { useState } from 'react';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

const AdminPage = () => {
  const [movies, setMovies] = useState([
    { title: 'Movie 1', director: 'Director 1' },
    { title: 'Movie 2', director: 'Director 2' },
    // Add more movies as needed
  ]);

  const [showForm, setShowForm] = useState(false);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setShowForm(false); // Hide the form after adding a movie
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <MovieList movies={movies} />
      {showForm ? (
        <MovieForm addMovie={addMovie} />
      ) : (
        <button onClick={() => setShowForm(true)}>Add Movie</button>
      )}
    </div>
  );
};

export default AdminPage;
