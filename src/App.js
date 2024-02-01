// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './component/MovieDetails';
// import BookingForm from './component/BookingForm';
import './App.css'; 
import Card from './component/Card';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Card/>} />
          <Route path="/movie/:id" element={<MovieDetails/>} />

          {/* <Route path="/bookmark" element={<BookingForm/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
