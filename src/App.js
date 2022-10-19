import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Create from './pages/create/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
