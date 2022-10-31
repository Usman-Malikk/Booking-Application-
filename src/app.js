import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/home.js"
import Erroe from "./Pages/Errorpage"
import Hotels from "./Pages/Hotel/hotels.js"
import Hotel from "./Pages/Singlehotel/Singlehotel"

const App =()=>

{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/hotels" element={<Hotels/>}/>
            <Route path ="/hotel/:id" element={<Hotel/>}/>
            <Route path ="*" element={<Erroe/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App