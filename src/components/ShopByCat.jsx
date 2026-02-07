import React from 'react'
import { useDispatch } from 'react-redux';
import { updateCategory } from '../features.js/shopByCatSlice';
import { Link } from 'react-router';


function ShopByCat() {

  const dispatch = useDispatch();

  const categories = [
    {
      name: 'clothes',
      image: 'https://images.unsplash.com/photo-1759852909799-c00a5c24fb43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvdXRlcndlYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc2NTk3NDg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      name: 'electronics',
      image: 'https://i.imgur.com/ZANVnHE.jpeg',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      name: 'shoes',
      image: 'https://i.imgur.com/qNOjJje.jpeg',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      name: 'furniture',
      image: 'https://i.imgur.com/Qphac99.jpeg',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      name: 'miscellaneous',
      image: 'https://images.unsplash.com/photo-1759090987847-7d2b25beb2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGVzaWduZXIlMjBkcmVzcyUyMGZhc2hpb258ZW58MXx8fHwxNzcwMzc0NjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      span: 'md:col-span-1 md:row-span-1'
    },

  ];
  return (
    <div>
       <section className="pb-16 py-10 px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="mb-10 text-center text-5xl">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
  {categories.map((category) => (
    
    <Link 
      key={category.name} 
      to={'/shopcat'} 
      className={category.span}
      onClick={() => dispatch(updateCategory(category.name))}
    >
      <div className="group relative h-full w-full overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
        <img 
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-lg md:text-xl capitalize font-semibold">{category.name}</h3>
          <p className="text-white/80 text-xs md:text-sm mt-0.5">Explore Collection</p>
        </div>
      </div>
    </Link>
  ))}
</div>
      </div>
    </section>
    </div>
  )
}

export default ShopByCat