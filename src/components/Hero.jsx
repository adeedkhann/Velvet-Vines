import banner from '../assets/herobanner.png'

function Hero() {
  return (
    <div className={`pt-16 sm:pt-20 md:pt-0`}>
       <div className='relative w-screen overflow-hidden'>
         <img className={`w-full h-auto min-h-96 sm:min-h-screen object-cover`} src={banner} alt="" />
         <div className='absolute flex flex-col inset-0 items-center justify-center px-4 sm:px-6'>
            <div className='text-center animate-fade-in'>
                <h3 className='text-purple-900 font-bold my-3 flex justify-center flex-wrap text-lg sm:text-2xl md:text-4xl lg:text-6xl gap-1 sm:gap-3'>Velvet <span className='text-green-900'> & Vines</span></h3>
                <p className='text-gray-200 text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed'>Discover premium fashion that defines modern luxury and timeless elegance</p>
            </div>
            <div className='mx-auto mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center px-2'>
                <button className='border-2 border-white rounded-full px-3 sm:px-6 py-2 text-xs sm:text-base text-white hover:text-black hover:bg-white hover:scale-105 transition-all duration-300 w-full sm:w-auto'>Shop Men</button>
                <button className='border-2 border-white bg-white rounded-full px-3 sm:px-6 py-2 text-xs sm:text-base text-black hover:text-white hover:bg-slate-500 hover:scale-105 transition-all duration-300 w-full sm:w-auto'>Shop Women</button>
            </div>
            <div className='absolute bottom-0 w-full bg-black/40 backdrop-blur-sm h-10 sm:h-12 flex items-center justify-center text-white'>
                <p className='ml-2 sm:ml-10 tracking-wider text-xs sm:text-sm'> As seen in : </p>
                <ul className='flex mx-2 sm:mx-4 gap-1 sm:gap-0 text-xs sm:text-sm'>
                  <li className='mx-1 sm:mx-3 md:mx-6 tracking-widest'>VOGUE</li>
                  <li className='mx-1 sm:mx-3 md:mx-6 tracking-widest'>GQ</li>
                  <li className='mx-1 sm:mx-3 md:mx-6 tracking-widest'>FORBES</li>
                </ul>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Hero