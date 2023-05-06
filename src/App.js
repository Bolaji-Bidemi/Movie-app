import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail';
import Header from './components/Header/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
    <Router>
        <Header />
      <Routes>
        
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail /> } />
        <Route element={<PageNotFound />} />
        
      </Routes>
      <Footer />
    </Router>
    
       
    </div>
  );
}

export default App;
