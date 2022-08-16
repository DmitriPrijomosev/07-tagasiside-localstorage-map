import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasisidede lehele</button>
      </Link>

      <Routes>
        <Route path='/' exact element={<div>Tere!</div>}></Route>
        <Route path='/tagasiside' exact element={ <Tagasiside /> }></Route>
      </Routes>
      
    </div>
  );
}

export default App;
