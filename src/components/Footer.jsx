import { LuCopyright } from "react-icons/lu";

function Footer() {

    const footerInfo = [{
        id:1,
        head : "Shop",
        item1: "New Arrivals",
        item2:"Men",
        item3:"Women",
        item4:"Accessories",
        item5:"Sale"
    },
    {id:2,
        head : "Company",
        item1: "About Us",
        item2:"Careers",
        item3:"Sustainability",
        item4:"Press",
        item5:"Blog"
    },
    {id:3,
        head : "Customer Care",
        item1: "Contact Us",
        item2:"Shipping Info",
        item3:"Returns",
        item4:"Size Guide",
        item5:"FAQs"
    },
    {id:4,
        head : "Legal",
        item1: "Privacy Policy",
        item2:"Terms of Service",
        item3:"Cookie Policy",
        item4:"Accessibility",
        
    },

    ]

  return (
    <div className="bg-neutral-900 text-white flex flex-col">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl mx-auto mt-8 sm:mt-12 mb-3 sm:mb-5 items-center justify-center flex text-center">Stay in the Loop</h2>
            <p className="text-gray-400 mb-4 sm:mb-5 items-center justify-center flex text-center text-sm sm:text-base">Subscribe to get exclusive offers and style updates</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-6 sm:mb-8 px-2"><input className="border border-gray-600 focus:border-slate-400 rounded-full px-4 py-2 text-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all w-full sm:w-auto" placeholder="Enter your email address" type="text" /> <button className="border border-gray-600 rounded-full px-6 sm:px-8 bg-slate-500 hover:bg-slate-400 py-2 text-sm font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-auto">Subscribe</button></div>
        </div>
        <hr className="text-gray-700" />
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 my-8 sm:my-12 px-4 sm:px-6 lg:px-8">
            {footerInfo.map((item)=>(
            <div key={item.id} className="flex flex-col gap-3 group">
                <h3 className="text-base sm:text-lg font-semibold group-hover:text-slate-400 transition-colors duration-300">{item.head}</h3>
                <ul className="text-xs sm:text-sm gap-2 text-gray-400 flex flex-col">
                    <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">{item.item1}</li>
                    <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">{item.item2}</li>
                    <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">{item.item3}</li>
                    <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">{item.item4}</li>
                    {item.item5 && <li className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">{item.item5}</li>}
                </ul>
            </div>

            ))}
            
        </div>
        <hr className="text-gray-700" />
        <div className="flex justify-between mx-3 sm:mx-6 lg:mx-8 items-center flex-col sm:flex-col lg:flex-row gap-4 py-6 sm:py-8">
            <div className="text-sm sm:text-base flex items-center gap-1 text-gray-400"><LuCopyright className="text-xs"/>2025 Velvet&Vines. All rights reserved.</div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-2">
            <span className="text-gray-400 text-xs sm:text-sm">We accept :</span>
            <span className="border border-gray-600 px-2 py-1 text-gray-400 rounded text-xs hover:bg-gray-800 hover:text-white transition-all duration-300">VISA</span> 
            <span className="border border-gray-600 px-2 py-1 text-gray-400 rounded text-xs hover:bg-gray-800 hover:text-white transition-all duration-300">MC</span> 
            <span className="border border-gray-600 px-2 py-1 text-gray-400 rounded text-xs hover:bg-gray-800 hover:text-white transition-all duration-300">AMEX</span> 
            <span className="border border-gray-600 px-2 py-1 text-gray-400 rounded text-xs hover:bg-gray-800 hover:text-white transition-all duration-300">PP</span> 
            </div>
        </div>
    
    </div>
  )
}

export default Footer