
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews'
import Dashboard from './Components/Dashboard/Dashboard'
import About from './Components/About/About'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NoPageFound from './Components/Nopagefound/NoPageFound';
import Blogs from './Components/Blogs/Blogs';
import ProductDetails from './Components/Products/ProductDetails';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/details/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NoPageFound></NoPageFound>}></Route>
      </Routes>
    <Footer></Footer>  
    <ToastContainer/>
    </div>
  );
}

export default App;
