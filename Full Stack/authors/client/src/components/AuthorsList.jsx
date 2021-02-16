import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

export default () => {
  const [authors, setAuthors] = useState([]);

  const onDeleteHandler = authorId => {
    axios
      .delete(`http://localhost:8000/api/authors/${authorId}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error.response.data));

    setAuthors(authors.filter(author => author._id != authorId));
  };

  useEffect(() => {
    document.title = 'Authors List';

    axios
      .get('http://localhost:8000/api/authors')
      .then(response => {
        console.log(response.data);
        setAuthors(
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
    <>
      <div className="d-flex justify-content-between mb-4">
        <h3>Authors List</h3>
        <Link to="/new">Add Author</Link>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.length > 0 &&
            authors.map((author, idx) => {
              return (
                <tr key={idx}>
                  <td>{author.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-info mr-4 px-5 py-2"
                      onClick={() => navigate(`/edit/${author._id}`)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger px-5 py-2"
                      onClick={() => onDeleteHandler(author._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
