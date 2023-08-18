import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage/HomePage';
import CoverLetter from './components/coverletter/CoverLetter';
import Price from './components/price/Price';
import Insight from './components/insight/Insight';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/price' element={<Price />}></Route>
          <Route path='/coverletter' element={<CoverLetter />}></Route>
          <Route path='/insight' element={<Insight />}></Route>
        </Routes> 
    </div>
  );
}

export default App;
