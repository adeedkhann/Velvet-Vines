import { FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown ,MdOutlineKeyboardArrowUp  } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import logo from '../assets/logovnv.png'
function Navbar() {
    
  return (
    <nav className="flex w-screen items-center justify-between h-12">
        <span className=""><img src={logo} className="h-12 w-50" alt="" /></span>
        <ul className="flex ">
            <li className="ml-10 flex hover:text-gray-500 items-center">Shop <span className=""><MdOutlineKeyboardArrowDown/></span></li>
            <li className="ml-10 hover:text-gray-500">New Arrivals</li>
            <li className="ml-10 hover:text-gray-500">Sale</li>
            <li className="ml-10 hover:text-gray-500">About</li>
        </ul>
        <ul className="flex justify-between">
            <li className="mr-7 p-1 border rounded-full ">{/*<input className="border border-red-600" type="text" /> */}<IoIosSearch/></li>
            <li className="mr-7 border rounded-full p-1 bg-slate-500 text-white"><FaUser/></li>
            <li className="mr-10 p-1 border rounded-full"><FiShoppingBag/></li>
        </ul>
    </nav>
  )
}

export default Navbar