import React from "react";
import { Route, Routes as ReactDomRoutes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Checkout from "../pages/Checkout/Checkout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

// import Abouts from "../components/Abouts/Abouts";
// import Products from "../components/Products/Products";
// import Contacts from "../components/Contacts/Contacts";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route
        path='/checkout'
        element={
          <ProtectedRoute redirectTo='/login'>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path='*' element={<p>Error</p>} />
    </ReactDomRoutes>
  );
}

export default Routes;
