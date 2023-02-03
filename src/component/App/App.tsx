import React, { Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './App.scss'

import {AsyncMainPage} from "../../pages/main-page/async-main-page";
import {AsyncAboutPage} from "../../pages/about-page/async-about-page";

export const App = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <ul>
        <Link to='/'>Main Page</Link>
        <Link to='/about'>About Page</Link>
      </ul>
    <Suspense fallback={<div>Loading...</div>}>

      <Routes>
        <Route path='/' element={<AsyncMainPage/>}/>
        <Route path='/about' element={<AsyncAboutPage/>}/>
      </Routes>
    </Suspense>
    </div>
    </BrowserRouter>
  );
};
