import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from "../scenes/home/home";
import Login from "../scenes/login/SignIn";
import SignUp from "../scenes/login/SignUp";
import PageEvento from "../scenes/eventos"
import Profile from "../scenes/profile";
import Checkout from "../scenes/checkout";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
    const { isAuthenticated } = useAuth();
  return (
        isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
    )
  }

const Router = () => {
    return (
        <Routes>
            <Route element={<PrivateRoutes/>}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/evento/:id" element={<PageEvento />} />
            </Route>
            <Route path="/"  element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
        </Routes>
    )
}

export default Router