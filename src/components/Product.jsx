import { useEffect, useState } from 'react';

import { CiCirclePlus ,CiCircleMinus } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Product() {

    const id = useSelector((state)=>state.product.id)
    const [Quantity , setQuantity] = useState(1)
    const [item , setItem] = useState(null)
    const [activeImg , setActiveImg] = useState("")
    useEffect(()=>{
        if(id){
            ;(async ()=>{
                try {
                    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
                    setItem(response.data)
                    setActiveImg(response.data.images[0])
                } catch (error) {
                    console.log(error)
                }
            })()
        }
        
    },[id])

    if (!item) {
        return <div className="h-screen flex justify-center items-center text-2xl">Loading Product...</div>;
    }
    

  return (
    <div>
        
        <div className='flex flex-col md:flex-row justify-center items-center '>
            <div className='overflow-hidden  rounded-2xl ml-10'><img className=' mt-10 w-300 rounded-2xl' src={activeImg} alt="" />
            <div className='flex gap-2 mt-3 mb-2'>
                {/* <img className='w-30 rounded-xl' onClick={()=>setActiveImg(item.images[0])} src={item.images[0]} alt="" />
            <img className='w-30 rounded-xl' onClick={()=>setActiveImg(item.images[1])} src={item.images[1]} alt="" />
            <img className='w-30 rounded-xl' onClick={()=>setActiveImg(item.images[2])} src={item.images[2]} alt="" /> */}
            {item.images.map((img)=>{
                return(
                    <img className={`w-30 rounded-xl ${activeImg==img? "border":"opacity-50 "}`} onClick={()=>setActiveImg(img)} src={img} alt="" />
                )
            })}
            </div>
            </div>
            <div className=' flex flex-col w-400 mr-30 justify-center ml-10'>
                <h1 className='text-4xl mb-3 font-semibold'>{item.title}</h1>
                <h3 className='text-xl my-2'>${item.price}</h3>
                <p className='text-gray-700 '>{item.description}</p>
                <div className='flex items-center gap-10'>
                    <div className='flex flex-col my-2'>
                    <h3 className='my-2 font-semibold'>Select Size</h3>
                    <div className='flex gap-1'>
                        <span className='border rounded-xl px-3 py-1'>XS</span>
                        <span className='border rounded-xl px-3 py-1'>S</span>
                        <span className='border rounded-xl px-3 py-1'>M</span>
                        <span className='border rounded-xl px-3 py-1'>L</span>
                        <span className='border rounded-xl px-3 py-1'>XL</span>
                        <span className='border rounded-xl px-3 py-1'>XXL</span>
                    </div>
                </div>
                <div>
                    <h3 className=' font-semibold my-2' >Select Color</h3>
                    <div className='flex gap-2'>
                        <span className='h-8 w-8 rounded-full  border-2 border-slate-500 hover:border-indigo-900 bg-stone-500'></span>
                        <span className='h-8 w-8 rounded-full  border-2 border-slate-500 hover:border-indigo-900 bg-blue-200'></span>
                        <span className='h-8 w-8 rounded-full  border-2 border-slate-500 hover:border-indigo-900 bg-green-200'></span>
                        <span className='h-8 w-8 rounded-full  border-2 border-slate-500 hover:border-indigo-900 bg-slate-300'></span>
                        
                       
                    </div>

                </div>
                </div>
                <div className=' flex flex-col my-2 gap-2'>
                    <h3 className='my-2 font-semibold' >Quantity :</h3>
                    <div className='flex '><button className='h-8 w-8 rounded-full text-4xl ' onClick={()=>{
                        if(Quantity===0){
                           return setQuantity(0)
                        }
                        setQuantity(Quantity-1)
                    }}><CiCircleMinus/></button>
                    <span className='my-auto mx-3'>{Quantity}</span>
                    <button className='h-8 w-8 rounded-full text-4xl' onClick={()=>setQuantity(Quantity+1)} ><CiCirclePlus/></button></div>
                </div>
                <div className=' gap-3 mt-1 mb-5 flex'>
                    <button className='bg-black text-white font-semibold w-full rounded-xl py-2.5 text-xl hover:bg-slate-500  '>Add to Cart</button>
                    <button className='font-semibold w-full rounded-xl py-2.5 text-xl border hover:bg-black hover:text-white'>Add to Wishlist</button>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Product