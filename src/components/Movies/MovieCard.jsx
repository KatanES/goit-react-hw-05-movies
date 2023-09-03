import { NavLink } from 'react-router-dom';
// import { Location } from 'react-router-dom';
export const MovieCard = ({ movieList }) => {
  return (
    <main>
      <h1>Search results</h1>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
              {movie.original_title || movie.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};
