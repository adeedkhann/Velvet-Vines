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
        <div className='bg-black/90 h-90 text-white flex flex-col justify-center items-center'>
            <h1 className=' text-5xl my-3'>Season Sale - 50% Off</h1>
            <p className='text-xl text-slate-300 my-2'>Limited time offer on selected items</p>
            <div className='my-15'>
                <span className=' bg-slate-800 rounded-lg px-10 py-10 text-xl mx-2' > {format(days)} </span> :
                <span className=' bg-slate-800 rounded-lg px-10 py-10 text-xl  mx-2 '> {format(hours)} </span> : 
                <span className=' bg-slate-800 rounded-lg px-10 py-10 text-xl  mx-2'> {format(minutes)}</span> : 
                <span className=' bg-slate-800 rounded-lg px-10 py-10 text-xl  mx-2'> {format(seconds)} </span> 
            </div>
            <button className='border rounded-lg px-5 py-2 bg-red-400 hover:bg-red-500'>Shop Sale</button>
        </div>
        <div className='h-70 justify-around py-10 bg-white/90 flex'>
            <span className='flex flex-col justify-center items-center'>
                <span className='text-6xl my-3 bg-slate-100 p-4 rounded-full'>< IoLeafOutline/></span>
                <h3 className='text-2xl my-3'>Sustainable Materials</h3>
                <p className='text-slate-600'>Ethically sourced and eco-friendly fabrics</p>
            </span>
            <span  className='flex flex-col justify-center items-center'>
                <span className='text-6xl my-3 bg-slate-100 p-4 rounded-full'><FaTruckFast/></span>
                <h3 className='text-2xl my-3'>Next Day Delivery</h3>
                <p className='text-slate-600'>Free express shipping on orders over $100</p>
            </span>
            <span  className='flex flex-col justify-center items-center'>
                <span className='text-6xl my-3 bg-slate-100 p-4 rounded-full'><ImLoop2/></span>
                <h3  className='text-2xl my-3'>Easy Returns</h3>
                <p className='text-slate-600'>30-day hassle-free return policy</p>
            </span>
            <span  className='flex flex-col justify-center items-center'>
                <span className='text-6xl my-3 bg-slate-100 p-4 rounded-full'><FaHeadphones/></span>
                <h3 className='text-2xl my-3'>24/7 Support</h3>
                <p className='text-slate-600'>Expert customer service always available</p>
            </span>
        </div>
    </div>
  )
}

export default Sale