import banner from '../assets/herobanner.png'

function Hero() {
  return (
    <div className={`pt-10`}>
       <div className='relative'>
         <img className={``} src={banner} alt="" />
         <div className='absolute flex flex-col inset-0 items-center justify-center w-screen'>
            <div>
                <h3 className='text-purple-900 font-bold my-3 flex justify-center text-6xl gap-3'>Velvet <span className='text-green-900'> & Vines</span></h3>
                <p className='text-gray-300 text-2xl'>Discover premium fashion that defines modern luxury and timeless elegance</p>
            </div>
            <div className='mx-auto mt-4'>
                <button className='border rounded-full px-4 py-2 text-base mr-5 text-white hover:text-black hover:bg-white'>Shop Men</button>
                <button className='border rounded-full px-4 py-2 bg-white text-base text-black hover:text-white hover:bg-slate-500 '>Shop Women</button>
            </div>
            <div className='absolute bottom-0 w-screen bg-transparent  backdrop-blur-2xl h-12 flex items-center justify-center  text-white'>
                <p className='ml-10 tracking-wider'> As seen in : </p>
                <ul className='flex mx-4'>
                  <li className='mx-6  tracking-widest '>VOGUE</li>
                  <li className='mx-6 tracking-widest'>GQ</li>
                  <li className='mx-6 tracking-widest'>FORBES</li>
                </ul>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Hero