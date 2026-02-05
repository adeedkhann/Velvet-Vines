
import { CiCircleMinus , CiCirclePlus } from "react-icons/ci";
import { FaTrash } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart ,incQuantity , decQuantity } from "../features.js/cartSlice";

function Cart() {
    
    
    
    const Tquantity = useSelector((state)=> state.cart.totalQuantity)
    const TotalAmount = useSelector((state)=> state.cart.totalAmount)
    const items = useSelector((state)=> state.cart.items)
    const dispatch = useDispatch()

  return (
    <div className='flex mb-5'>
        
        <div>
            <div className='pt-20 px-20 mb-2 text-4xl'>
            <h1>Shopping Cart</h1>
            <p className='text-xl text-slate-900 mt-1'>{Tquantity} items in your cart</p>
            </div>

            {items.map((item)=>(
                <div key={item.id} className='border ml-20 my-1 w-180 rounded-2xl flex'>
                <img className='w-45 mx-3 my-2 rounded-3xl ' src={item.image} alt="" />
                <div className=' mt-6 relative'>
                    <div className='flex items-start mb-15'>
                    <h3 className='text-xl mr-40'>
                        {item.title}
                    </h3>

                    <span onClick={() => dispatch(removeFromCart(item.id))} className='absolute top-3 left-100 cursor-pointer' >
                        <FaTrash/>
                    </span>
                    </div>
                    <div className='flex justify-between relative mb-2'>
                        <span className='text-3xl text-black flex gap-2'>
                        <button className='cursor-pointer w-4 mr-5'onClick={()=>dispatch(decQuantity(item.id))} ><CiCircleMinus/>
                        </button> 
                        {item.quantity} 
                        <button className='cursor-pointer w-4' onClick={()=>dispatch(incQuantity(item.id))}><CiCirclePlus/></button></span>
                        <span className='absolute left-98 text-xl'> $ {item.price}</span>
                    </div>
                    
                    
                </div>
                

            </div>
            ))}
        </div>


        <div className=' border mt-50 rounded-2xl flex flex-col h-70 w-80 mx-10 text-xl '>
            <div className='ml-4 mt-3'>
                <h2 className='text-2xl'>
                    Order Summary
                </h2>
                <div className='mt-3'>
                    <h4 className='flex justify-between'>
                    Subtotal<span className='mr-10'> ${TotalAmount.toFixed(2)}</span>
                    </h4>
                </div>
                <div className='mt-3'>
                    <h4 className='flex justify-between'>
                    Tax : 18% <span className='mr-10'> ${((TotalAmount * 18)/100).toFixed(2) } </span>
                    </h4>
                </div>
                <div className='mt-3'>
                    <h4 className='flex justify-between'>
                    Total <span className='mr-10'> ${ (TotalAmount + (TotalAmount * 18)/100).toFixed(2)}</span>
                    </h4>
                </div>
            </div>
            <hr className=' mt-3 text-black mx-2'></hr>
            <button className='my-6 bg-slate-400 border-slate-500 hover:bg-slate-700 text-white  border rounded-full mx-3 py-2 cursor-pointer'>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default Cart