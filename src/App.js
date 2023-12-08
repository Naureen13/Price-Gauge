// eslint-disable-next-line
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {BestSelling, LoginPage,ProductDetailsPage} from "./Routes.js"
import {SignupPage} from "./Routes.js"
import {HomePage} from "./Routes.js"
import {FAQPage} from "./Routes.js"
import {ProductsPage,About,ProfilePage} from "./Routes.js"
import './style.css';
import { ToastContainer } from "react-toastify";
import {Provider} from 'react-redux';
import "react-toastify/dist/ReactToastify.css";

function App(){
    return <div> 
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>} /> 
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/best-selling" element={<BestSelling/>}/>
      <Route path="/faq" element={<FAQPage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/product/:name" element={<ProductDetailsPage/>}/>
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </BrowserRouter>

       
    </div>
}

export default App;