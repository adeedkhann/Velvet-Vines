import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CiCirclePlus ,CiCircleMinus } from "react-icons/ci";
import {  useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features.js/cartSlice';

function Product() {
    const {id : curId} = useParams()
    const reduxId = useSelector((state)=>state.product.id)
    const mainId = curId || reduxId
    const [Quantity , setQuantity] = useState(1)
    const [item , setItem] = useState(null)
    const [activeImg , setActiveImg] = useState("")
    const dispatch = useDispatch()
    const  [addedToCart , setAddedToCart]=useState(false)


    useEffect(()=>{
        if(mainId){
            ;(async ()=>{
                try {
                    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${mainId}`)
                    setItem(response.data)
                    setActiveImg(response.data.images[0])
                    
                } catch (error) {
                    console.log(error)
                }
            })()
        }
        
    },[mainId])

    const handleAddToCart = ()=>{
        dispatch(addToCart({
            id :item.id,
            title : item.title,
            price : item.price,
            image : item.images[0],
            quantity : Quantity,
        }))
        setAddedToCart(true)
    }

    if (!item) {
        return <div className="h-screen flex justify-center items-center text-2xl">Loading Product...</div>;
    }
    

  return (
    <div className="pt-20 pb-10 px-4 sm:px-6 md:px-10">
        
        <div className='flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-10'>
            <div className='w-full md:w-auto overflow-hidden rounded-2xl'>
              <img className='mt-6 md:mt-0 w-full md:w-96 h-auto rounded-2xl object-cover hover:scale-105 transition-transform duration-500' src={activeImg} alt="Product" />
              <div className='flex gap-2 mt-3 mb-2 overflow-x-auto pb-2'>
                
              {item.images.map((img, idx)=>{
                  return(
                      <img key={idx} className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg cursor-pointer transition-all duration-300 ${activeImg==img? "border-2 border-black scale-105":"opacity-60 hover:opacity-100 "}`} onClick={()=>setActiveImg(img)} src={img} alt="Product thumb" />
                  )
              })}
              </div>
            </div>
            <div className='flex flex-col w-full md:w-96 gap-4'>
                <div className='animate-fade-in'>
                  <h1 className='text-2xl sm:text-3xl md:text-4xl mb-2 font-semibold'>{item.title}</h1>
                  <h3 className='text-2xl md:text-3xl my-2 text-slate-700 font-bold'>${item.price}</h3>
                  <p className='text-gray-700 text-sm md:text-base leading-relaxed'>{item.description}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold text-sm md:text-base'>Select Size</h3>
                    <div className='flex gap-2 flex-wrap'>
                        <span className='border border-gray-300 rounded-lg px-3 py-2 cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-sm'>XS</span>
                        <span className='border border-gray-300 rounded-lg px-3 py-2 cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-sm'>S</span>
                        <span className='border border-gray-300 rounded-lg px-3 py-2 cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-sm'>M</span>
                        <span className='border border-gray-300 rounded-lg px-3 py-2 cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-sm'>L</span>
                        <span className='border border-gray-300 rounded-lg px-3 py-2 cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-sm'>XL</span>
                        <span className='border border-gray-300 rounded-lg px-3 py-2 cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-sm'>XXL</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold text-sm md:text-base'>Select Color</h3>
                    <div className='flex gap-3 flex-wrap'>
                        <span className='h-8 w-8 rounded-full border-2 border-gray-400 hover:border-indigo-900 hover:scale-125 transition-all duration-300 bg-stone-500 cursor-pointer'></span>
                        <span className='h-8 w-8 rounded-full border-2 border-gray-400 hover:border-indigo-900 hover:scale-125 transition-all duration-300 bg-blue-200 cursor-pointer'></span>
                        <span className='h-8 w-8 rounded-full border-2 border-gray-400 hover:border-indigo-900 hover:scale-125 transition-all duration-300 bg-green-200 cursor-pointer'></span>
                        <span className='h-8 w-8 rounded-full border-2 border-gray-400 hover:border-indigo-900 hover:scale-125 transition-all duration-300 bg-slate-300 cursor-pointer'></span>
                        
                       
                    </div>

                </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold text-sm md:text-base'>Quantity :</h3>
                    <div className='flex items-center gap-3'>
                      <button className='h-10 w-10 rounded-full text-2xl border border-gray-300 hover:bg-gray-100 transition-all duration-300 flex items-center justify-center' onClick={()=>{
                        if(Quantity===0){
                           return setQuantity(0)
                        }
                        setQuantity(Quantity-1)
                    }}><CiCircleMinus/></button>
                    <span className='text-lg md:text-xl font-semibold min-w-8 text-center'>{Quantity}</span>
                    <button className='h-10 w-10 rounded-full text-2xl border border-gray-300 hover:bg-gray-100 transition-all duration-300 flex items-center justify-center' onClick={()=>setQuantity(Quantity+1)} ><CiCirclePlus/></button>
                    </div>
                </div>
                <div className='gap-3 mt-2 flex flex-col sm:flex-row'>
                    <button onClick={handleAddToCart} className='bg-black text-white font-semibold w-full rounded-lg py-3 text-base hover:bg-slate-700 hover:scale-105 transition-all duration-300 active:scale-95' >{addedToCart?"✓ Added to cart":"Add to Cart"}</button>
                    <button className='font-semibold w-full rounded-lg py-3 text-base border border-black hover:bg-black hover:text-white transition-all duration-300 active:scale-95'>Add to Wishlist</button>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Product