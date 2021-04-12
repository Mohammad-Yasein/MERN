import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default props => {
  const { changeAuth } = props;

  const [books, setBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  const logoutHandler = () => {
    axios
      .get('http://localhost:8000/api/logout', { withCredentials: true })
      .then(response => {
        console.log(response.data);
        changeAuth(false);
      })
      .catch(error => console.log(error.response.data));
  };

  const addHandler = bookId => {
    const book = books.filter(book => book._id == bookId)[0];
    console.log(book);

    axios
      .put('http://localhost:8000/api/users/me/fav', { book }, { withCredentials: true })
      .then(response => {
        console.log(response.data);
        setFavBooks(response.data);
        setBooks(books.filter(book => book._id != bookId));
      })
      .catch(error => {
        console.log(error.response.data);
        error.response.status == 401 && changeAuth(false);
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/users/me/fav', { withCredentials: true })
      .then(response => {
        console.log(response.data);
        setFavBooks(response.data);

        axios
          .get('http://localhost:8000/api/books', { withCredentials: true })
          .then(response => {
            console.log(response.data);
            setBooks(
              response.data.sort((a, b) => {
                const first = a.name.toLowerCase();
                const second = b.name.toLowerCase();
                return first > second ? 1 : first < second ? -1 : 0;
              })
            );
          })
          .catch(error => {
            console.log(error.response.data);
            error.response.status == 401 && changeAuth(false);
          });
      })
      .catch(error => {
        console.log(error.response.data);
        error.response.status == 401 && changeAuth(false);
      });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between mb-5">
        <h4>User Profile</h4>
        <button className="btn btn-link p-0" onClick={() => logoutHandler()}>
          Sign Out
        </button>
      </div>
      <div className="row">
        <div className="col-lg">
          <h4>All Books</h4>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Book Name</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.length > 0 &&
                books.map((book, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{book.name}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-info px-5 py-2"
                          onClick={() => addHandler(book._id)}
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="col-lg">
          <h4 className="mb-4">Favorite Books</h4>
          {favBooks.length > 0 && (
            <ul>
              {favBooks.map((book, idx) => (
                <li key={idx}>{book.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
