import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './Pages/Repositories';
import Home from './Pages/Home'

export default function RoutesApp(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path= '/Repositories' element={<Repositories/>} />
    </Routes>
    </BrowserRouter>
    );
}