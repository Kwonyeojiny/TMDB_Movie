import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
