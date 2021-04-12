import React from 'react';
import { Link } from '@reach/router';

export default () => {
  const path = window.location.pathname;

  return (
    <>
      {path.includes('/players') && (
        <div className="sub-nav mb-4">
          <Link to="/players/list" className="d-inline-block border-right border-secondary px-4 py-1">
            List
          </Link>
          <Link to="/players/addplayer" className="d-inline-block px-4 py-1">
            Add Player
          </Link>
        </div>
      )}
      {path.includes('/status') && (
        <div>
          <h3>Player Status</h3>
          <div className="sub-nav mb-4">
            <Link to="/status/game/1" className="d-inline-block border-right border-secondary px-4 py-1">
              Game 1
            </Link>
            <Link to="/status/game/2" className="d-inline-block border-right border-secondary px-4 py-1">
              Game 2
            </Link>
            <Link to="/status/game/3" className="d-inline-block px-4 py-1">
              Game 3
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
