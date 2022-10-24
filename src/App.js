import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import MovieList from './containers/MovieList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
