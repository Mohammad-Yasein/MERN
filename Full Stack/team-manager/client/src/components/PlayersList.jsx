import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [players, setPlayers] = useState([]);

  const onDeleteHandler = playerId => {
    axios
      .delete(`http://localhost:8000/api/players/${playerId}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error.response.data));

    setPlayers(players.filter(player => player._id != playerId));
  };

  useEffect(() => {
    document.title = 'Players List';

    axios
      .get('http://localhost:8000/api/players')
      .then(response => {
        console.log(response.data);
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
  }, []);

  return (
    <table className="table table-hover text-center">
      <thead>
        <tr>
          <th scope="col">Team Name</th>
          <th scope="col">Preferred Position</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {players.length > 0 &&
          players.map((player, idx) => {
            return (
              <tr key={idx}>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger px-5 py-2"
                    onClick={() =>
                      window.confirm(`Are you sure you want to delete ${player.name}`) &&
                      onDeleteHandler(player._id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
