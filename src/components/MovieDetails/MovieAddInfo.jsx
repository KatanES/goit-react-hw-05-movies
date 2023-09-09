import { FcOpenedFolder, FcConferenceCall } from 'react-icons/fc';
import { Link, useLocation } from 'react-router-dom';

const MovieAddInfo = () => {
  const location = useLocation();
  return (
    <div>
      <h4>Additional Information</h4>
      <ul>
        <li>
          <>
            <FcConferenceCall />
          </>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <>{<FcOpenedFolder />}</>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieAddInfo;
