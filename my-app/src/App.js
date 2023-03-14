import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components /Home';
import FavList from './components /FavList ';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Favorite" element={<FavList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
