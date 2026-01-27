import React, { useState } from 'react'
import test from "../assets/testproduct.jpeg"
import { CiCircleMinus , CiCirclePlus } from "react-icons/ci";
import { FaTrash } from "react-icons/fa6";

function Cart() {
    
    const [productCart , setProductCart] = useState([])


    const [noItem , setNoItem] = useState(0)

  return (
    <div className='flex'>
        
        <div>
            <div className='pt-20 px-20 text-4xl'>
            <h1>Shopping Cart</h1>
            <p className='text-xl text-slate-900 mt-1'>{noItem} items in your cart</p>
            </div>

            <div className='border ml-20 rounded-2xl flex'>
                <img className='w-40 rounded-3xl ' src={test} alt="" />
                <div className='flex justify-around mt-10'>
                    <div>
                        <h3>
                        Silk Evening Dress
                    </h3>

                    <span>
                        <FaTrash/>
                    </span>
                    </div>
                    <div>
                        <span className='text-3xl text-black flex gap-2'><button ><CiCircleMinus/></button> 3 <button><CiCirclePlus/></button></span>
                    </div>
                </div>
                <div>
                    
                    <span></span>
                </div>

            </div>
        </div>


        <div>
            summary
        </div>
    </div>
  )
}

export default Cart