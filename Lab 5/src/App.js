import React, { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

  const addMovie = () => {
    if (!title) return;

    const newMovie = {
      id: Date.now(),
      title: title,
      review: review,
      rating: rating,
    };

    setMovies([...movies, newMovie]);

    setTitle("");
    setReview("");
    setRating(1);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const convertStars = (num) => {
    return "⭐".repeat(num);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🎬 Movie Watch List</h1>

      <input
        type="text"
        placeholder="Movie name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Write a review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <br />
      <br />

      <label>Rating: </label>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>

      <br />
      <br />

      <button onClick={addMovie}>Add Movie</button>

      <hr />

      {movies.map((movie) => (
        <div key={movie.id} style={{ marginBottom: "15px" }}>
          <h3>{movie.title}</h3>
          <p>{movie.review}</p>
          <p>{convertStars(movie.rating)}</p>

          <button onClick={() => deleteMovie(movie.id)}>❌ Remove</button>
        </div>
      ))}
    </div>
  );
}
