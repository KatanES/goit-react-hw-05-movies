import MovieAddInfo from './MovieAddInfo';

export const MovieDetailsComponent = ({ movieData }) => {
  const { original_title, genres, overview, poster_path, vote_average } =
    movieData || {};
  const score = vote_average * 10;
  const scoreToFixed = score.toFixed(2);

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        widrh={220}
        height={280}
        loading="lazy"
        alt="poster"
      />
      <div>
        <h1>{original_title}</h1>
        <h3>User score: {scoreToFixed}%</h3>
        <h3>Overview</h3>
        <p>{overview} </p>
        <h3>Genres</h3>
        <p>
          {genres &&
            genres.length &&
            genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </p>
        <MovieAddInfo />
      </div>
    </>
  );
};
