import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [poster, setPoster] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!title || !director || !description || !duration || !poster) return;

  //   const durationNumber = parseInt(duration);
  //   if (isNaN(durationNumber) || durationNumber <= 0) {
  //     alert('Please enter a valid positive number for duration');
  //     return;
  //   }


  //   setTitle('');
  //   setDirector('');
  //   setDescription('');
  //   setDuration('');
  //   setPoster('');
  // };

  const validateDuration = (value) => {
    if (!value) {
      return 'Duration is required';
    }

    const parsedValue = parseInt(value);
    if (isNaN(parsedValue) || parsedValue <= 0) {
      return 'Please enter a valid positive number for duration';
    }

    return true;
  };

  const{register, handleSubmit, formState : {errors}, setValue} = useForm({
    defaultValues:{
      title:'',
      director:'',
      description:'',
      duration: '',
      poster: '',

    }
  })

  const addMovie = (data) =>{
    const {title, director, poster, description, duration} = data;
    axios.post(`http://localhost:3001/addmovie`, {title, director, poster, description, duration})
    .then(result =>{
      console.log(result);
      window.location.reload();
    }).catch(err =>{
      console.log(err.response.data);
      
    })
  }


  return (
    <div className="movie-form-container">
      <h2 className="add-movie-title">Add New Movie</h2>
      <form className="movie-form" onSubmit={handleSubmit(addMovie)}>
        <label>
          Title:
          <input
            type="text"
            //value={title}
            //onChange={(e) => setTitle(e.target.value)}
            {...register("title", {required:"Title is required"} )}
          />
        </label>
        <p color='red'>{errors.title && errors.title.message}</p>
        <label>
          Director:
          <input
            type="text"
            // value={director}
            onChange={(e) => setDirector(e.target.value)}
            {...register("director", {required:"Director is required"} )}
          />
        </label>
        <p color='red'>{errors.director && errors.director.message}</p>
        <label>
          Description:
          <input
            type="text"
            // value={description}
            onChange={(e) => setDescription(e.target.value)}
            {...register("description", {required:"Description is required"} )}
          />
        </label>
        <p color='red'>{errors.description && errors.description.message}</p>
        <label>
        Duration (minutes):
        <input
          type="number"
          onChange={(e) => setValue('duration', e.target.value, { shouldValidate: true })}
          {...register('duration', { validate: validateDuration })}
        />
        <p color='red'>{errors.duration && errors.duration.message}</p>
      </label>
        <label>
          Poster (URL):
          <input
            type="text"
            // value={poster}
            onChange={(e) => setPoster(e.target.value)}
            {...register("poster", {required:"Poster is required"} )}
          />
        </label>
        <p color='red'>{errors.duration && errors.duration.message}</p>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};
export default MovieForm;
