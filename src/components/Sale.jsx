import { useState, useEffect } from "react";
import { ImLoop2 } from "react-icons/im";
import { FaTruckFast ,FaHeadphones } from "react-icons/fa6";
import { IoLeafOutline } from "react-icons/io5";
function Sale() {
    const STARTING_SECONDS = 172800; 
    const [secondsLeft, setSecondsLeft] = useState(STARTING_SECONDS);

    useEffect(() => {
    if (secondsLeft <= 0) return;

    const timeout = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft]);


  const days = Math.floor(secondsLeft / (24 * 60 * 60));
  const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((secondsLeft % (60 * 60)) / 60);
  const seconds = secondsLeft % 60;

  const format = (num) => String(num).padStart(2, '0');
    
  return (
    <div className=''>
        <div className='bg-gradient-to-r from-black/90 to-slate-900 min-h-80 text-white flex flex-col justify-center items-center px-4 py-10 sm:py-16'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl my-3 font-bold text-center animate-pulse'>Season Sale - 50% Off</h1>
            <p className='text-base sm:text-lg md:text-xl text-slate-300 my-2 text-center'>Limited time offer on selected items</p>
            <div className='my-8 sm:my-12 flex flex-wrap justify-center gap-1 sm:gap-2'>
                <div className='flex flex-col items-center'>
                  <span className='bg-slate-800 rounded-lg px-2 sm:px-4 md:px-8 py-2 sm:py-4 md:py-6 text-lg sm:text-xl md:text-2xl font-bold mx-1'>{format(days)}</span>
                  <span className='text-xs mt-1'>Days</span>
                </div>
                <span className='text-lg sm:text-2xl md:text-3xl font-bold self-center mx-1'>:</span>
                <div className='flex flex-col items-center'>
                  <span className='bg-slate-800 rounded-lg px-2 sm:px-4 md:px-8 py-2 sm:py-4 md:py-6 text-lg sm:text-xl md:text-2xl font-bold mx-1'>{format(hours)}</span>
                  <span className='text-xs mt-1'>Hours</span>
                </div>
                <span className='text-lg sm:text-2xl md:text-3xl font-bold self-center mx-1'>:</span>
                <div className='flex flex-col items-center'>
                  <span className='bg-slate-800 rounded-lg px-2 sm:px-4 md:px-8 py-2 sm:py-4 md:py-6 text-lg sm:text-xl md:text-2xl font-bold mx-1'>{format(minutes)}</span>
                  <span className='text-xs mt-1'>Mins</span>
                </div>
                <span className='text-lg sm:text-2xl md:text-3xl font-bold self-center mx-1'>:</span>
                <div className='flex flex-col items-center'>
                  <span className='bg-slate-800 rounded-lg px-2 sm:px-4 md:px-8 py-2 sm:py-4 md:py-6 text-lg sm:text-xl md:text-2xl font-bold mx-1'>{format(seconds)}</span>
                  <span className='text-xs mt-1'>Secs</span>
                </div>
            </div>
            <button className='border-2 border-red-400 rounded-lg px-6 sm:px-8 py-2 sm:py-3 bg-red-400 hover:bg-red-500 hover:scale-105 transition-all duration-300 text-white font-semibold'>Shop Sale</button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-8 sm:py-12 px-4 bg-white/90'>
            <span className='flex flex-col justify-center items-center text-center p-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white'>
                <span className='text-4xl sm:text-6xl my-3 bg-slate-100 p-3 sm:p-4 rounded-full hover:bg-slate-200 transition-colors'><IoLeafOutline/></span>
                <h3 className='text-lg sm:text-2xl my-2 sm:my-3 font-semibold'>Sustainable Materials</h3>
                <p className='text-xs sm:text-sm text-slate-600'>Ethically sourced and eco-friendly fabrics</p>
            </span>
            <span className='flex flex-col justify-center items-center text-center p-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white'>
                <span className='text-4xl sm:text-6xl my-3 bg-slate-100 p-3 sm:p-4 rounded-full hover:bg-slate-200 transition-colors'><FaTruckFast/></span>
                <h3 className='text-lg sm:text-2xl my-2 sm:my-3 font-semibold'>Next Day Delivery</h3>
                <p className='text-xs sm:text-sm text-slate-600'>Free express shipping on orders over $100</p>
            </span>
            <span className='flex flex-col justify-center items-center text-center p-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white'>
                <span className='text-4xl sm:text-6xl my-3 bg-slate-100 p-3 sm:p-4 rounded-full hover:bg-slate-200 transition-colors'><ImLoop2/></span>
                <h3 className='text-lg sm:text-2xl my-2 sm:my-3 font-semibold'>Easy Returns</h3>
                <p className='text-xs sm:text-sm text-slate-600'>30-day hassle-free return policy</p>
            </span>
            <span className='flex flex-col justify-center items-center text-center p-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white'>
                <span className='text-4xl sm:text-6xl my-3 bg-slate-100 p-3 sm:p-4 rounded-full hover:bg-slate-200 transition-colors'><FaHeadphones/></span>
                <h3 className='text-lg sm:text-2xl my-2 sm:my-3 font-semibold'>24/7 Support</h3>
                <p className='text-xs sm:text-sm text-slate-600'>Expert customer service always available</p>
            </span>
        </div>
    </div>
  )
}

export default Sale