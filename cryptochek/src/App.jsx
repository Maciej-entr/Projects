import Navbar from './components/Navbar/Navbar';
import './index.css';
import {Routes, Route} from'react-router-dom'
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path='/coin/:coinId' element={<Coin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
