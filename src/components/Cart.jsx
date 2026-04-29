
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
    <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 mb-10 pt-20 px-4 sm:px-6 md:px-10'>
        
        <div className='w-full lg:flex-1'>
            <div className='mb-4 sm:mb-6 animate-fade-in'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Shopping Cart</h1>
            <p className='text-base sm:text-lg text-slate-700 mt-2'>{Tquantity} {Tquantity === 1 ? 'item' : 'items'} in your cart</p>
            </div>

            <div className='space-y-4'>
            {items.length === 0 ? (
              <div className='text-center py-10 bg-gray-50 rounded-lg'>
                <p className='text-gray-500 text-lg'>Your cart is empty</p>
              </div>
            ) : (
              items.map((item)=>(
                <div key={item.id} className='border border-gray-200 rounded-2xl flex flex-col sm:flex-row gap-4 p-4 hover:shadow-lg transition-all duration-300 animate-fade-in'>
                <img className='w-full sm:w-32 md:w-40 h-32 md:h-40 object-cover rounded-lg' src={item.image} alt="Product" />
                <div className='flex-1 flex flex-col justify-between relative'>
                    <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4'>
                    <h3 className='text-base sm:text-lg font-semibold line-clamp-2'>
                        {item.title}
                    </h3>

                    <button onClick={() => dispatch(removeFromCart(item.id))} className='self-end sm:self-start p-2 hover:bg-red-100 rounded-full transition-all duration-300 text-red-600 hover:text-red-700' >
                        <FaTrash className='text-lg'/>
                    </button>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
                        <div className='flex items-center gap-3 bg-gray-50 rounded-lg w-fit px-3 py-2'>
                        <button className='cursor-pointer hover:text-slate-600 transition-colors text-lg' onClick={()=>dispatch(decQuantity(item.id))} ><CiCircleMinus/>
                        </button> 
                        <span className='font-semibold min-w-8 text-center'>{item.quantity}</span>
                        <button className='cursor-pointer hover:text-slate-600 transition-colors text-lg' onClick={()=>dispatch(incQuantity(item.id))}><CiCirclePlus/></button>
                        </div>
                        <span className='text-xl md:text-2xl font-bold'> ${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    
                    
                </div>

            </div>
            ))
            )}
            </div>
        </div>


        <div className='w-full lg:w-80 border border-gray-200 rounded-2xl flex flex-col p-6 bg-white sticky top-32 h-fit shadow-lg'>
            <div className='mb-6'>
                <h2 className='text-xl sm:text-2xl font-bold mb-4'>
                    Order Summary
                </h2>
                <div className='space-y-3'>
                    <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Subtotal</span>
                    <span className='font-semibold'> ${TotalAmount.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between text-sm'>
                    <span className='text-gray-600'>Tax (18%)</span>
                    <span className='font-semibold'> ${((TotalAmount * 18)/100).toFixed(2) } </span>
                    </div>
                    <hr className='my-3'></hr>
                    <div className='flex justify-between text-base sm:text-lg font-bold'>
                    <span>Total</span>
                    <span> ${ (TotalAmount + (TotalAmount * 18)/100).toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <button className='w-full bg-black text-white hover:bg-slate-700 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95'>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default Cart