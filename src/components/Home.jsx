import React from 'react'
import Hero from './Hero'
import NewArrivals from './NewArrivals'
import Sale from './Sale'
import ShopByCat from './ShopByCat'

function Home() {
  return (
    <div>
        <Hero/>
        <ShopByCat/>
        <NewArrivals/>
        <Sale/>

    </div>
  )
}

export default Home