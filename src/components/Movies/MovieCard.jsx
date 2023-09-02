export const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.poster_path} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>({movie.release_date})</p>
      <p>User score: {movie.vote_average}</p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <ul>
        {movie.genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};
