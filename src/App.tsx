import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import MobileMenu from "./components/mobile_menu/MobileMenu";
import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [choosePlanet, setChoosePlanet] = useState(1);
  const [leftSlide, setLeftSlide] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header
          setChoosePlanet={setChoosePlanet}
          choosePlanet={choosePlanet}
          setLeftSlide={setLeftSlide}
          leftSlide={leftSlide}
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
        {mobileMenu ? (
          <MobileMenu
            setChoosePlanet={setChoosePlanet}
            setMobileMenu={setMobileMenu}
          />
        ) : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:planet" element={<Main leftSlide={leftSlide} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
