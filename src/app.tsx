import React, {Suspense} from 'react';
import { Link, Route, Routes} from 'react-router-dom';

import './styles/index.scss';

import {AsyncMainPage} from "./pages/main-page/async-main-page";
import {AsyncAboutPage} from "./pages/about-page/async-about-page";
import {useTheme} from "./theme/use-theme";

export const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
        <div className={`app ${theme}`}>
          <button onClick={toggleTheme}>TOGGLE</button>
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
  );
};
