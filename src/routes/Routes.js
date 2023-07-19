import React from "react";
import { Route, Routes as ReactDomRoutes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<p>Error</p>} />
    </ReactDomRoutes>
  );
}

export default Routes;
