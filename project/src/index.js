import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Pages/Header/Header';
import Main from './Pages/Main/Main';
import Footer from './Pages/Footer/Footer';
import Falcon from './Pages/Falcon/Falcon';
import Dragon from './Pages/Dragon/Dragon';
import Updates from './Pages/Updates/Updates';
import Welcome from './Pages/Welcome/Welcome';
import Error from './Pages/Error/Error';
import More from './Pages/Welcome/More';
import material from "./data/welcomes.json";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Root/>} >
      <Route index element={<Welcome />} />
      <Route path='Main' element={<Main />} />
      <Route path='Falcon' element={<Falcon />} />
      <Route path='Dragon' element={<Dragon />} />
      <Route path='Updates' element={<Updates />} />
      <Route path='*' element={<Error />} />
      <Route path='Welcome' element={<Welcome />} />
      <Route path='Welcome/:moreId' loader={loader} element={<More/>} errorElement={<Error/>} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
 
);

function loader({ params }) {
  const id = material.filter(e => e.id === params.moreId)
  return id[0];
  
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

