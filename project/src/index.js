import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Pages/Header/Header';
import Main from './Pages/Main/Main';
import Footer from './Pages/Footer/Footer';
import Falcon from './Pages/Falcon/Falcon';
import Dragon from './Pages/Dragon/Dragon';
import Updates from './Pages/Updates/Updates';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';

const Root = () => {
  return(
    <div className='container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Root/>} >
      <Route index element={<Main />} />
      <Route path='Main' element={<Main />} />
      <Route path='Falcon' element={<Falcon />} />
      <Route path='Dragon' element={<Dragon />} />
      <Route path='Updates' element={<Updates />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

