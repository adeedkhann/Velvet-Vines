import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setId } from "../features.js/productSlice";
import axios from 'axios';
import { Link } from "react-router";

import { FiShoppingBag } from 'react-icons/fi';


function Card({item}){

       const dispatch = useDispatch()

       

        return(
            <div className=' w-50 flex group flex-col' onClick={()=>dispatch(setId(item.id))}>
                <Link to={`/product/${item.id}`}>
                <div className='  rounded-lg relative overflow-hidden '><img className='group-hover:scale-110 hover:transition-transform duration-1000  rounded-2xl' src={item.images[0]} alt="img loading..." />
                <div className='absolute z-10 inset-0 text-2xl opacity-0 group-hover:opacity-100 flex '><button className='mx-auto my-25 items-center justify-center gap-2 flex text-sm hover:bg-slate-500 hover:text-white bg-white h-8 w-30 rounded-full text'><FiShoppingBag/>View</button></div>
                </div>
                <h2 className='my-2 font-medium text-sm ml-2'>{item.title.slice(0, 30)}...</h2>
                <p className='ml-2 text-black'> $ {item.price}</p>
                <div className='flex ml-3 my-2 gap-3'>
                    <div className='h-4 w-4 rounded-full  border-2 border-slate-500 hover:border-indigo-900 bg-black'></div>
                    <div className='h-4 w-4 rounded-full  border-2 border-slate-500 hover:border-indigo-900 bg-emerald-700'></div>
                    <div className='h-4 w-4 rounded-full  border-2 border-slate-500 hover:border-indigo-900 bg-stone-500'></div>
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
    <div className='pt-20 flex flex-col justify-center items-center'>
        <h1 className='text-5xl py-10'>Shopping By {category}</h1>
        <div className='flex flex-wrap gap-10 justify-center'>
        {goods.map((product)=>(
            <Card key={product.id} item={product} />
        )
            
            
        )}
        </div>
    </div>
  )
}

export default ShopByPage