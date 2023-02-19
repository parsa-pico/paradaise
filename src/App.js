import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Home/NavBar";
import Messeage from "./Components/Home/Messeage";
import MyServices from "./Components/MyServices/Myservices";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-services" element={<MyServices />} />
      </Routes>
      <Messeage />
      <div className="push" />
      <p className="m-2">copyright © 2022 Paradise</p>
    </div>
  );
}

export default App;
