import { FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown ,MdOutlineKeyboardArrowUp  } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import logo from '../assets/logovnv.png'
import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { setId } from "../features.js/productSlice";
import { useDispatch } from "react-redux";
function Navbar() {
    
  const [searchActive  , setSearchActive] = useState(false)
  const [title  , setTitle]=useState("")
  const [result , setResult] = useState([])
  const dispatch = useDispatch();
    useEffect(()=>{
      if(title.length < 2 ){
        setResult([]);
        return;
      }


      const timer = setTimeout(async() => {
          try {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${title}`)
          setResult(response.data.slice(0,5))

          } catch (error) {
            console.log(error)
          }
         
      }, 500);

     return ()=> clearTimeout(timer);

    },[title])

   
  
  return (
    <nav className="flex fixed z-50 bg-white w-screen items-center justify-between h-15">
        <span className=""><img src={logo} className="h-12 w-50" alt="" /></span>
        <ul className="flex ">
            <Link to='/'> <li className="ml-10 flex hover:text-gray-500 items-center cursor-pointer">Home </li></Link>
            <Link to='newArr'><li className="ml-10 hover:text-gray-500 cursor-pointer">New Arrivals</li></Link>
            <li className="ml-10 hover:text-gray-500 cursor-pointer">Sale</li>
            <li className="ml-10 hover:text-gray-500 cursor-pointer">About</li>
        </ul>
        <ul className="flex justify-between h-10 group ">
            <div
        className={`
          transition-all duration-500 ease-in-out transform-gpu 
          ${searchActive ? 'w-64 opacity-100 translate-x-0' : 'w-0 opacity-0 translate-x-10 pointer-events-none'}
        `}
      >
        <input
          type="text"
          placeholder="Search..."
          value={title}
          onChange={(e)=> setTitle(e.target.value) }
          className="w-full px-2 py-2 mr-2 border border-black rounded-full focus:outline-none"
        />
        {result.length > 0 && (
        <div className="">
          {result.map((item) => (
             <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  onClick={() => {
                    dispatch(setId(item.id));
                    setTitle("");
                  }}
                  className="flex items-center gap-3 p-3 bg-white  "
                >
                  <img src={item.images[0]} alt="" className="w-10 h-10 rounded object-cover" />
                  <div>
                    <p className="text-sm font-medium text-gray-800 line-clamp-1">{item.title}</p>
                    <p className="text-xs text-gray-500">${item.price}</p>
                  </div>
                </Link>
          ))}
        </div>
      )}
      </div>

      

      
      <button
        onClick={() => setSearchActive(!searchActive)}
        className="mr-7 ml-2 p-3 border border-black rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
      >
        <IoIosSearch/>
      </button>
            <a href="https://github.com/adeedkhann" target="_blank"><li className="mr-7 border rounded-full p-3 cursor-pointer bg-slate-500 text-white"><FaUser/></li></a>
            <Link to='./cart'>  <li className="mr-10 p-3 border rounded-full cursor-pointer"><FiShoppingBag/></li></Link>
        </ul>
    </nav>
  )
}

export default Navbar