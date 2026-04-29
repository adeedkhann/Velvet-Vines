import React from 'react'
function Register() {
  const handleSubmit=()=>{
    
  }
  return (
    <div className='py-10 sm:py-16 md:py-20 gap-4 sm:gap-8 md:gap-16 lg:gap-40 justify-center items-center flex flex-col lg:flex-row px-4'>
        
        <div className='border border-gray-300 rounded-2xl flex flex-col justify-center items-center px-6 sm:px-12 md:px-16 lg:px-20 py-10 sm:py-16 md:py-20 w-full lg:w-auto max-w-md bg-white shadow-lg'> 
            <form onSubmit={handleSubmit} className='w-full space-y-4'>
              <button type='button' className='text-sm text-blue-600 hover:text-blue-800 transition-colors font-semibold mb-4'>← Back to home</button>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center'>Welcome Back</h1>
            
            <div className='space-y-3'>
              <div className='flex flex-col'>
                <label className='text-sm font-semibold text-gray-700 mb-2'>Full Name</label>
                <input type="text" className='border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black transition-all' name="fullname" placeholder='Enter your full name' />
              </div>
              <div className='flex flex-col'>
                <label className='text-sm font-semibold text-gray-700 mb-2'>Email</label>
                <input type="email" className='border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black transition-all' placeholder='Enter your email' />
              </div>
              <div className='flex flex-col'>
                <label className='text-sm font-semibold text-gray-700 mb-2'>Password</label>
                <input type="password" className='border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black transition-all' placeholder='Enter your password'/>
              </div>
              <div className='flex flex-col'>
                <label className='text-sm font-semibold text-gray-700 mb-2'>Confirm Password</label>
                <input type="password" className='border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black transition-all' placeholder='Confirm your password'/>
              </div>
              <div className='flex flex-col'>
                <label className='text-sm font-semibold text-gray-700 mb-2'>Phone Number</label>
                <input type="tel" className='border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black transition-all' placeholder='Enter your phone number'/>
              </div>
            </div>
            <button type='submit' className='w-full border-2 border-black rounded-lg px-10 py-3 bg-black text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 mt-6 hover:scale-105 active:scale-95'>Register</button>
            </form>
        </div>
        
        <img className='w-full lg:w-96 h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl object-cover shadow-lg hover:shadow-2xl transition-all duration-300' src="https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Register background" />
    </div>
  )
}

export default Register