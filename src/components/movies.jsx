import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import LikeButton from "./like";
import Pagination from "./pagination";

function MovieTable() {
  const allMovies = getMovies();
  let [movies, setMovies] = useState();
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setcurrentPage] = useState(1);

  // movies = paginate(allMovies,currentPage,pageSize);
  movies = allMovies;
  const handleDelete = (deletedMovie) => {
    console.log("deletedMovie", deletedMovie);
    let newMovieList = [...allMovies];
    newMovieList = newMovieList.filter((item) => item._id !== deletedMovie._id);
    console.log("newMovieList", newMovieList);
    setMovies(newMovieList);
  };

  const onToggleLike = (movie) => {
    const newMovieList = [...movies];
    let index = newMovieList.findIndex((item) => item._id === movie._id);
    newMovieList[index] = { ...movies[index] };
    newMovieList[index].liked = !movies[index].liked;
    setMovies(newMovieList);
  };

  const validate = (property) => {
    const errors = {};
    if(property.trim === ""){
      errors[property] = ""
    }
  };

  const handleOnPageChange = (page) => {
    setcurrentPage(page);
    // movies = paginate(allMovies,currentPage,pageSize);
    setMovies(movies);
  };
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genere Name</th>
            <th scope="col">Handle</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <LikeButton
                  liked={movie.liked}
                  onClick={() => onToggleLike(movie)}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination itemsCount={allMovies.length} pageSize={pageSize} onPageChange={handleOnPageChange} currentPage={currentPage}/> */}
    </React.Fragment>
  );
}

export default MovieTable;
