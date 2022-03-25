import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Home from "./screens/Home";
import ControlPanel from "./screens/ControlPanel";
import Products from "./screens/Products";
import Cart from "./screens/Cart";

import { useContext } from "react";
import { UserContext } from "./Context";

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-[#EDEDED]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {!user && (
            <>
              <Route element={<Login />} path="/auth/login" />
              <Route element={<Signup />} path="/auth/signup" />
            </>
          )}

          <Route path="/admin" element={<ControlPanel />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
