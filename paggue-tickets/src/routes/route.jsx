import { Routes, Route, redirect } from "react-router-dom";
import Home from "../scenes/home/home";
import Login from "../scenes/login/SignIn";
import SignUp from "../scenes/login/SignUp";
import Evento from "../scenes/eventos"
import Profile from "../scenes/profile";
import Checkout from "../scenes/checkout";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const Router = () => {
    const { data } = useAuth();
    useEffect(() => {
        function teste() {
            if (!data) {
                return redirect("/login");
            }
        }
        teste()
    }, [data])
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/evento" element={<Evento />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
        </Routes>
    )
}

export default Router