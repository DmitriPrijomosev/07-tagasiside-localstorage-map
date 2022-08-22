import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import TagasisedeAndjad from './pages/TagasisideAndjad';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasisidede lehele</button>
      </Link>
      <Link to="/tagasisideandjad">
        <button>Vaata, kes tagasisidet on andnud</button>
      </Link>

      <Routes>
        <Route path="/" exact element={<div>Tere!</div>}></Route>
        <Route path="/tagasiside" exact element={<Tagasiside />}></Route>
        <Route path="/tagasisideandjad" exact element={<TagasisedeAndjad />}></Route>
      </Routes>
    </div>
  );
}

export default App;
