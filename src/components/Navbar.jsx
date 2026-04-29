import { FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown ,MdOutlineKeyboardArrowUp, MdMenu, MdClose  } from "react-icons/md";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
    <nav className="flex fixed z-50 bg-white w-screen items-center justify-between h-auto md:h-15 px-4 md:px-0 py-3 md:py-0 border-b border-gray-200 shadow-sm">
        <span className="flex-shrink-0"><img src={logo} className="h-10 md:h-12 w-auto" alt="Velvet & Vines" /></span>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-2">
            <Link to='/'> <li className="px-4 py-2 hover:text-gray-500 cursor-pointer transition-colors duration-300">Home </li></Link>
            <Link to='newArr'><li className="px-4 py-2 hover:text-gray-500 cursor-pointer transition-colors duration-300">New Arrivals</li></Link>
            <li className="px-4 py-2 hover:text-gray-500 cursor-pointer transition-colors duration-300">Sale</li>
            <li className="px-4 py-2 hover:text-gray-500 cursor-pointer transition-colors duration-300">About</li>
        </ul>
        
        {/* Right Section - Desktop */}
        <ul className="hidden md:flex justify-between h-10 items-center gap-3 mr-5">
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
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all"
        />
        {result.length > 0 && (
        <div className="absolute top-full mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {result.map((item) => (
             <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  onClick={() => {
                    dispatch(setId(item.id));
                    setTitle("");
                  }}
                  className="flex items-center gap-3 p-3 bg-white hover:bg-gray-100 transition-colors duration-200"
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
        className="p-2 md:p-3 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:scale-105"
      >
        <IoIosSearch size={18} className="md:text-xl"/>
      </button>
            <a href="https://github.com/adeedkhann" target="_blank" rel="noreferrer"><li className="border rounded-full p-2 md:p-3 cursor-pointer bg-slate-500 text-white hover:bg-slate-600 transition-all duration-300 hover:shadow-lg"><FaUser size={16} className="md:text-lg"/></li></a>
            <Link to='./cart'>  <li className="p-2 md:p-3 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:scale-105"><FiShoppingBag size={18} className="md:text-lg"/></li></Link>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setSearchActive(!searchActive)}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
          >
            <IoIosSearch size={20}/>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
          >
            {mobileMenuOpen ? <MdClose size={24}/> : <MdMenu size={24}/>}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col px-4 py-3 gap-2">
              <Link to='/' onClick={() => setMobileMenuOpen(false)}> 
                <li className="px-4 py-2 hover:bg-gray-100 rounded transition-colors duration-300">Home</li>
              </Link>
              <Link to='newArr' onClick={() => setMobileMenuOpen(false)}>
                <li className="px-4 py-2 hover:bg-gray-100 rounded transition-colors duration-300">New Arrivals</li>
              </Link>
              <li className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer transition-colors duration-300">Sale</li>
              <li className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer transition-colors duration-300">About</li>
              <hr className="my-2"/>
              <Link to='./cart' onClick={() => setMobileMenuOpen(false)}>
                <li className="px-4 py-2 hover:bg-gray-100 rounded flex items-center gap-2 transition-colors duration-300">
                  <FiShoppingBag/> Cart
                </li>
              </Link>
              <a href="https://github.com/adeedkhann" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <li className="px-4 py-2 hover:bg-gray-100 rounded flex items-center gap-2 transition-colors duration-300">
                  <FaUser/> Profile
                </li>
              </a>
            </ul>
          </div>
        )}

        {/* Mobile Search Section */}
        {searchActive && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden px-4 py-3 w-screen">
            <input
              type="text"
              placeholder="Search products..."
              value={title}
              onChange={(e)=> setTitle(e.target.value) }
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all"
              autoFocus
            />
            {result.length > 0 && (
              <div className="mt-2 max-h-96 overflow-y-auto">
                {result.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    onClick={() => {
                      dispatch(setId(item.id));
                      setTitle("");
                      setSearchActive(false);
                    }}
                    className="flex items-center gap-3 p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <img src={item.images[0]} alt="" className="w-10 h-10 rounded object-cover" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 line-clamp-1">{item.title}</p>
                      <p className="text-xs text-gray-500">${item.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {title.length > 1 && result.length === 0 && (
              <div className="text-center py-4 text-gray-500 text-sm">
                No products found
              </div>
            )}
          </div>
        )}
    </nav>
  )
}

export default Navbar