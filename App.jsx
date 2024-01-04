import React from 'react'
import Nav from './Nav'
import Product from "./Product"
import "./global.css"
import { BrowserRouter as Router  , Routes , Route} from 'react-router-dom'
import Cart from './Cart'
import { ToastContainer  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update'




const App = () => {
  return (
    <Router>
      <ToastContainer />
       <Nav/>
      <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </Router>
  )
}

export default App