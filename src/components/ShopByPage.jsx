import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setId } from "../features.js/productSlice";
import axios from 'axios';
import { Link } from "react-router";

import { FiShoppingBag } from 'react-icons/fi';


function Card({item}){

       const dispatch = useDispatch()

       

        return(
            <div className='w-32 sm:w-40 md:w-48 flex group flex-col hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1' onClick={()=>dispatch(setId(item.id))}>
                <Link to={`/product/${item.id}`}>
                <div className='rounded-lg relative overflow-hidden'><img className='group-hover:scale-110 transition-transform duration-700 rounded-lg w-full h-auto' src={item.images[0]} alt="img loading..." />
                <div className='absolute z-10 inset-0 text-xl opacity-0 group-hover:opacity-100 flex transition-opacity duration-300'><button className='mx-auto my-auto items-center justify-center gap-1 sm:gap-2 flex text-xs sm:text-sm hover:bg-slate-500 hover:text-white bg-white h-7 sm:h-8 px-2 sm:w-30 rounded-full'><FiShoppingBag className='text-sm'/>View</button></div>
                </div>
                <h2 className='my-1 sm:my-2 font-medium text-xs sm:text-sm ml-1 sm:ml-2 line-clamp-2'>{item.title.slice(0, 30)}...</h2>
                <p className='ml-1 sm:ml-2 text-black text-xs sm:text-sm'> ${item.price}</p>
                <div className='flex ml-2 sm:ml-3 my-2 gap-2'>
                    <div className='h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-slate-500 hover:border-indigo-900 hover:scale-110 transition-all bg-black cursor-pointer'></div>
                    <div className='h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-slate-500 hover:border-indigo-900 hover:scale-110 transition-all bg-emerald-700 cursor-pointer'></div>
                    <div className='h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-slate-500 hover:border-indigo-900 hover:scale-110 transition-all bg-stone-500 cursor-pointer'></div>
                </div>
                </Link>
            </div>
        )
    }


function ShopByPage() {
    
    const category = useSelector((state)=>state.Category.Category)
    const [goods , setGoods] = useState([])

    useEffect(()=>{
        
        try {
            
            ;(async()=>{
                const items = await axios.get(`https://api.escuelajs.co/api/v1/products/?categorySlug=${category}`)
                setGoods(items.data)
            })()
        } catch (error) {
            console.log(error)
        }

    },[category])

  return (
    <div className='pt-24 sm:pt-28 md:pt-32 flex flex-col justify-center items-center pb-10 px-4 sm:px-6'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6 sm:py-10 font-bold capitalize text-center animate-fade-in'>Shopping By {category}</h1>
        {goods.length === 0 ? (
          <div className='text-center py-20'>
            <p className='text-gray-500 text-lg'>No products found in this category</p>
          </div>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6 w-full max-w-7xl'>
          {goods.map((product)=>(
              <Card key={product.id} item={product} />
          ))}
          </div>
        )}
    </div>
  )
}

export default ShopByPage