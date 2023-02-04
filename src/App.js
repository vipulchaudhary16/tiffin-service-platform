import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import ProviderDashboard from "./components/Admin/ProviderDashboard";
import Home from "./components/Home/Home";
import Navbar from "./components/nav/Navbar";
import Provider from "./components/Provider/Provider";
import Login from "./components/form/Login";
import Signup from "./components/form/Signup";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/admin" element={<ProviderDashboard />}></Route>
          <Route path="/providers/:name" element={<Provider />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
