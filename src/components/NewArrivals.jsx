import pic from '../assets/testproduct.jpg'
import { FiShoppingBag } from "react-icons/fi";
import { BsArrowRight } from 'react-icons/bs'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CgOpenCollective } from 'react-icons/cg';





function Card({item}){

       

        return(
            <div className=' w-35 flex group flex-col'>
                <div className='  rounded-lg relative overflow-hidden '><img className='group-hover:scale-110 hover:transition-transform duration-1000  rounded-2xl' src={item.images} alt="" />
                <div className='absolute z-10 inset-0 text-2xl opacity-0 group-hover:opacity-100 flex '><button className='mx-auto my-25 items-center justify-center gap-2 flex text-sm hover:bg-slate-500 hover:text-white bg-white h-8 w-30 rounded-full text'><FiShoppingBag/>Quick Add</button></div>
                </div>
                <h2 className='my-2 font-medium text-sm ml-2'>{item.title.slice(0, 30)}...</h2>
                <p className='ml-2 text-black'> $ {item.price}</p>
                <div className='flex ml-3 my-2 gap-3'>
                    <div className='h-4 w-4 rounded-full  border-2 border-slate-500 hover:border-indigo-900 bg-black'></div>
                    <div className='h-4 w-4 rounded-full  border-2 border-slate-500 hover:border-indigo-900 bg-emerald-700'></div>
                    <div className='h-4 w-4 rounded-full  border-2 border-slate-500 hover:border-indigo-900 bg-stone-500'></div>
                </div>
            </div>
        )
    }
function NewArrivals() {

const [goods , setGoods] = useState([])

    useEffect(()=>{
           try {
             ;(async()=>{//semi colon purana code end krne ke liye production code me safety purpose
                 const items = await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=100")
                    setGoods(items.data)
                   
               
             })()
           } catch (error) {
            console.log(error)
           }
       },[])
       

  return (
    <div className='flex flex-col'>
        <div className='flex justify-between'><span className='my-5 ml-5 text-3xl  font-semibold'>New Arrivals</span> <span className='mr-13 text-xl hover:text-gray-800 flex items-center gap-2 my-auto'>view all<BsArrowRight/></span></div>
        <div className='flex flex-wrap gap-10 justify-center'>
        {goods.map((product)=>(
            <Card key={product.id} item={product}/>
        )
            
            
        )}
        </div>
        
    </div>
  )
}

export default NewArrivals