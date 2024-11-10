import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  return (
    <>
      <Navbar setSearchResults={setSearchResults} />
      <Routes>
        <Route path="/" element={<MovieList searchResults={searchResults} />} />
        <Route path="/details/:id" element={<MovieDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
