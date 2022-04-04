
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews'
import Dashboard from './Components/Dashboard/Dashboard'
import About from './Components/About/About'
import Header from './Components/Header/Header';

function App() {
  return (
    <div >
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
