import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
   <nav>
        <div className='logoblock'>
            <div>
                 <img className='logoimg' src="https://tse3.mm.bing.net/th/id/OIP.GZ9NuUGpWdRl5Ml3rLSj3AHaGL?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            </div>
            <div>
                  <i>AMAZON STORE</i>
            </div>
        </div>
        <div>
            <Link to={"/"}>PRODUCT</Link>
        </div>
        <div>
            <Link to={"/cart"}>CART</Link>
        </div>
        

   </nav>
  )
}

export default Nav