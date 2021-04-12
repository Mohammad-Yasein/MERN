import React from 'react';
import { Router } from '@reach/router';

import MainNav from './components/MainNav';
import Wrapper from './components/Wrapper';
import PlayersList from './components/PlayersList';
import AddPlayer from './components/AddPlayer';
import PlayerStatus from './components/PlayerStatus';

const App = () => (
  <>
    <MainNav />
    <Router>
      <Wrapper path="/players">
        <PlayersList path="/list" />
        <AddPlayer path="/addplayer" />
      </Wrapper>
      <Wrapper path="/status">
        <PlayerStatus path="/game/1" />
      </Wrapper>
    </Router>
  </>
);

export default App;
