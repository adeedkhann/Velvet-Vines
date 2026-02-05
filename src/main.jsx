import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider, useSelector } from 'react-redux'
import { store } from './app/store.js'
import { createBrowserRouter, createRoutesFromElements, RouterProvider ,Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Product from './components/Product.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import NewArrivals from './components/NewArrivals.jsx'
import Sale from './components/Sale.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='cart' element={<Cart/>}/>
        <Route path="product/:id" element={<Product />} />
        <Route path="newArr" element={<NewArrivals/>}/>
        <Route path="sale" element={<Sale/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    

    <RouterProvider router={router}/>
    


  </Provider>


)
