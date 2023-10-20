import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Home from "./scenes/home/home";
import Login from "./scenes/login/SignIn";
import SignUp from "./scenes/login/SignUp";
import Show1 from "./scenes/show1"
import Show2 from "./scenes/show2"
import Show3 from "./scenes/show3"
import Show4 from "./scenes/show4"
import Profile from "./scenes/profile";
import Checkout from "./scenes/checkout";

function App() {
  return (
    <div className="app">
      <main className = 'content'>
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/show1" element={<Show1 />} />
          <Route path="/show2" element={<Show2 />} />
          <Route path="/show3" element={<Show3 />} />
          <Route path="/show4" element={<Show4 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
