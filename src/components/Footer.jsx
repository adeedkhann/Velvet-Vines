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
    <div className="bg-neutral-900 text-white flex flex-col ">
        <div className="mx-auto h-60">
            <h2 className=" text-3xl mx-14 mt-13 mb-5 items-center justify-center flex">Stay in the Loop</h2>
            <p className="text-gray-400 mb-5 items-center justify-center flex">Subscribe to get exclusive offers and style updates</p>
            <div className=""><input className="border focus:border-slate-500 rounded-4xl mr-3 w-100 px-3 py-2" placeholder="Enter your email address" type="text" /> <button className="border rounded-4xl px-6 bg-slate-500  hover:bg-slate-400 py-2">Subscirbe</button></div>
        </div>
        <hr className="text-gray-500" />
        <div className="flex justify-around h-50 mt-10">
            {footerInfo.map((item)=>(
            <div key={item.id}  className="flex flex-col gap-3">
                <h3 className="text-xl">{item.head}</h3>
                <ul  className="text-sm gap-1 text-gray-400 ">
                    <li className="hover:text-white">{item.item1}</li>
                    <li className="hover:text-white">{item.item2}</li>
                    <li className="hover:text-white">{item.item3}</li>
                    <li className="hover:text-white">{item.item4}</li>
                    <li className="hover:text-white">{item.item5}</li>
                </ul>
            </div>

            ))}
            
        </div>
        <hr className="text-gray-500"   />
        <div className="flex justify-between mx-5 h-20 items-center">
            <div className="text-xl flex items-center gap-1 text-gray-400"><LuCopyright/>2025 Velvet&Vines. All rights reserved.</div>
            <div>
            <span className="text-gray-400 mr-2">We accept :</span>
            <span className="border mx-1 px-2 py-1 text-gray-400 rounded-lg text-sm ">VISA</span> 
            <span className="border mx-1 px-2 py-1 text-gray-400 rounded-lg text-sm ">MC</span> 
            <span className="border mx-1 px-2 py-1 text-gray-400 rounded-lg text-sm ">AMEX</span> 
            <span className="border mx-1 px-2 py-1 text-gray-400 rounded-lg text-sm ">PP</span> 
            </div>
        </div>
    
    </div>
  )
}

export default Footer