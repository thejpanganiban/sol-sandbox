import { Routes, Route, Link } from "react-router-dom";

import HomePage from './pages/HomePage';
import SimpleCoinPage from "./pages/SimpleCoin";
import StoragePage from './pages/StoragePage';

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/storage">Storage</Link>
          </li>
          <li>
            <Link to="/simplecoin">SimpleCoin</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/storage" element={<StoragePage />} />
        <Route path="/simplecoin" element={<SimpleCoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
