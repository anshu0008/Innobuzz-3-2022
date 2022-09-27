
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home.js';
import Sectors  from './components/Sectors';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sector' element={
          <Sectors />
        }/>
      </Routes>
    </Router>
  );
}

export default App;
