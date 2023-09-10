import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { FcOpenedFolder, FcConferenceCall } from 'react-icons/fc';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { getMovieById } from 'API/api';
// import { MovieDetailsComponent } from 'components/MovieDetails/MovieDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const location = useLocation();
  const goBackLink = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovieData(data);
      } catch (error) {
        console.error('Fail to get data about the movie');
      }
    };
    fetchMovieData();
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  // return <MovieDetailsComponent movieData={movieData} />;
  const { original_title, genres, overview, poster_path, vote_average } =
    movieData || {};
  const score = vote_average * 10;
  const scoreToFixed = score.toFixed(2);

  return (
    <main>
      <button type="button">
        <Link to={goBackLink.current}>
          <HiArrowNarrowLeft size={32} />
          Go back
        </Link>
      </button>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        widrh={220}
        height={280}
        loading="lazy"
        alt="poster"
      />
      <div>
        <h2>{original_title}</h2>
        <h3>User score: {scoreToFixed}%</h3>
        <h3>Overview</h3>
        <p>{overview} </p>
        <h3>Genres</h3>
        <p>
          {genres &&
            genres.length &&
            genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </p>
      </div>
      <div>
        <h4>Additional information</h4>
        <div>
          <ul>
            <li>
              <div>
                <FcConferenceCall />
              </div>
              <Link to="cast" state={{ from: location }}>
                Cast
              </Link>
            </li>
            <li>
              <div>{<FcOpenedFolder />}</div>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
