import { FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown ,MdOutlineKeyboardArrowUp  } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import logo from '../assets/logovnv.png'
import { useState } from "react";
function Navbar() {
    
  const [searchActive  , setSearchActive] = useState(false)
  
  return (
    <nav className="flex fixed z-50 bg-white w-screen items-center justify-between h-12">
        <span className=""><img src={logo} className="h-12 w-50" alt="" /></span>
        <ul className="flex ">
            <li className="ml-10 flex hover:text-gray-500 items-center cursor-pointer">Shop <span className=""><MdOutlineKeyboardArrowDown/></span></li>
            <li className="ml-10 hover:text-gray-500 cursor-pointer">New Arrivals</li>
            <li className="ml-10 hover:text-gray-500 cursor-pointer">Sale</li>
            <li className="ml-10 hover:text-gray-500 cursor-pointer">About</li>
        </ul>
        <ul className="flex justify-between h-10 group ">
            {/* <li>{searchActive && <input className={`border none rounded-full px-2 py-2 mr-2 cursor-pointer  ${searchActive?"-translate-x-2 w-64 opacity-100 transition-transform duration-1000 ease-in-out":"opacity-0 w-0"}  `} type="text" placeholder="Search..." />}</li>
            <li className="mr-7 p-3 border rounded-full cursor-pointer " onClick={()=>setSearchActive(!searchActive)}><IoIosSearch/></li> */}
            <div
        className={`
          transition-all duration-500 ease-in-out transform-gpu 
          ${searchActive ? 'w-64 opacity-100 translate-x-0' : 'w-0 opacity-0 translate-x-10 pointer-events-none'}
        `}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-2 py-2 mr-2 border border-black rounded-full focus:outline-none"
        />
      </div>

      
      <button
        onClick={() => setSearchActive(!searchActive)}
        className="mr-7 ml-2 p-3 border border-black rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <IoIosSearch/>
      </button>
            <li className="mr-7 border rounded-full p-3 cursor-pointer bg-slate-500 text-white"><FaUser/></li>
            <li className="mr-10 p-3 border rounded-full cursor-pointer"><FiShoppingBag/></li>
        </ul>
    </nav>
  )
}

export default Navbar