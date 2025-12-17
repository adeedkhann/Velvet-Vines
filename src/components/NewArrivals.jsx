import pic from '../assets/testproduct.jpg'


function NewArrivals() {

    function Card(){
        return(
            <div className=' w-70 flex flex-col'>
                <div className=' h-90 rounded-lg overflow-hidden w-70'><img className='hover:scale-110 hover:transition-transform duration-1000  rounded-2xl' src={pic} alt="" /></div>
                <h2 className='my-2 font-medium ml-2'>Cashmere Sweater</h2>
                <p className='ml-2 text-black'>$249</p>
                <div className='flex ml-3 my-2 gap-3'>
                    <div className='h-6 w-6 rounded-full border border-2 border-slate-500 hover:border-indigo-900 bg-black'></div>
                    <div className='h-6 w-6 rounded-full border border-2 border-slate-500 hover:border-indigo-900 bg-emerald-700'></div>
                    <div className='h-6 w-6 rounded-full border border-2 border-slate-500 hover:border-indigo-900 bg-stone-500'></div>
                </div>
            </div>
        )
    }

  return (
    <div className='flex flex-col'>
        <div className='flex'><span className='my-5 ml-5 text-3xl  font-semibold'>New Arrivals</span> <span className=''>view all</span></div>
        <div className='flex flex-wrap gap-10 ml-10'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  )
}

export default NewArrivals