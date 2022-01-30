import "./App.css";
import React from "react";
import MovieTable from "./components/movies";
import { Route, Navigate, Routes } from "react-router-dom";
import Customer from "./components/customer";
import LoginForm from "./components/login";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/movies" element={<MovieTable/>} />
          <Route path="/customers" element={<Customer/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/not-found" element={<NotFound/>} />
          <Route path="/" element={<Navigate replace to="/movies" />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
/*
  <main className="container">
      <Route path="/movies" component={MovieTable}/>
      <Route path="/customers" component={Customer}/>
      <Route path="/not-found" component={NotFound}/>
      <Navigate  from="/" exact to="/movies"/>
      <Navigate  to="/not-found"/>
      <MovieTable />
    </main> 
*/
