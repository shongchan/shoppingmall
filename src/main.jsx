import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Fashion from './pages/Fashion.jsx'
import Accessory from './pages/Accessory.jsx'
import Digital from './pages/Digital.jsx'
import Cart from './pages/Cart.jsx'
import store from './store/store.js'
import ProductDetail from './components/ProductDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/fashion" element={<Fashion category={"패션"} />}></Route>
          <Route path="/fashion/product/:id" element={<ProductDetail />}></Route>
          <Route path="/accessory" element={<Accessory category={"액세서리"} />}></Route>
          <Route path="/accessory/product/:id" element={<ProductDetail />}></Route>
          <Route path="/digital" element={<Digital category={"디지털"} />}></Route>
          <Route path="/digital/product/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart category={"장바구니"}/>}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
