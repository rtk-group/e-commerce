
import { Routes, Route} from 'react-router-dom'
// import './App.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Cart from './Pages/Cart.jsx'
import Collection from './Pages/Collection.jsx'
import Login from './Pages/Login.jsx'
import Orders from './Pages/Orders.jsx'
import PlaceOrders from './Pages/PlaceOrders.jsx'
import Product from './Pages/Product.jsx'
import Contact from './Pages/Contact.jsx'
import Navbar from './Component/Navbar.jsx'
import Footer from './Component/Footer.jsx'
import Searchbaar from './Component/Searchbaar.jsx'
import { ToastContainer, toast } from 'react-toastify';



function App() {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar/>
      <Searchbaar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/placeorders' element={<PlaceOrders/>}/>
        <Route path='/product/:productid' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </div>
    
    
  )
}

export default App


