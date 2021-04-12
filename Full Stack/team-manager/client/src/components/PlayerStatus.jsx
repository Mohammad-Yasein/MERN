import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});

  const onClickHandler = (e, id) => {
    axios
      .put(`http://localhost:8000/api/players/${id}`, {
        ...players.filter(player => player._id == id),
        status: e.target.value,
      })
      .then(response => {
        console.log('update player click', response.data);
        setPlayers([...players.filter(player => player._id != id), response.data]);
        setPlayer(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    document.title = 'Player Status';

    axios
      .get('http://localhost:8000/api/players')
      .then(response => {
        console.log('get players useEffect', response.data);
        setPlayers(
          response.data.sort((a, b) => {
            const first = a.name.toLowerCase();
            const second = b.name.toLowerCase();
            return first > second ? 1 : first < second ? -1 : 0;
          })
        );
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, [player.updatedAt]);

  return (
    <table className="table table-hover text-center">
      <thead>
        <tr>
          <th scope="col">Team Name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {players.length > 0 &&
          players.map((player, idx) => {
            return (
              <tr key={idx}>
                <td>{player.name}</td>
                <td className="d-flex justify-content-around">
                  <button
                    type="button"
                    className={`${
                      player.status == 'playing' ? 'active ' : ''
                    }btn btn-outline-success px-5 py-2`}
                    value="playing"
                    onClick={e => onClickHandler(e, player._id)}
                  >
                    Playing
                  </button>
                  <button
                    type="button"
                    className={`${
                      player.status == 'not playing' ? 'active ' : ''
                    }btn btn-outline-danger px-5 py-2`}
                    value="not playing"
                    onClick={e => onClickHandler(e, player._id)}
                  >
                    Not Playing
                  </button>
                  <button
                    type="button"
                    className={`${
                      player.status == 'undecided' ? 'active ' : ''
                    }btn btn-outline-warning px-5 py-2`}
                    value="undecided"
                    onClick={e => onClickHandler(e, player._id)}
                  >
                    Undecided
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
