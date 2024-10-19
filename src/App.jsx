import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ComponentUI from './components/ComponentUI';
import DogImage from './components/Opendata';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
            <Link to="/">Product page</Link>{' '}
            <Link to="/dog-image">Dog image</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ComponentUI />} />
        <Route path="/dog-image" element={<DogImage />} />
      </Routes>
    </Router>
  );
}

export default App;

