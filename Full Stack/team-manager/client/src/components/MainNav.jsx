import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <div className="main-nav mb-4">
    <Link to="/players/list" className="d-inline-block border-right border-secondary px-4 py-1">
      Manage Players
    </Link>
    <Link to="/status/game/1" className="d-inline-block px-4 py-1">
      Manage Player Status
    </Link>
  </div>
);
