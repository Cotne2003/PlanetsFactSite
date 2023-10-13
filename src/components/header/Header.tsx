import { useState } from "react";
import "./Header.css";
import navbarMenu from "/assets/icon-hamburger.svg";
import { Link } from "react-router-dom";

interface props {
  setChoosePlanet: (value: number) => void;
  choosePlanet: number;
  setLeftSlide: (value: boolean) => void;
  leftSlide: boolean;
  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
}

function Header(props: props) {
  const [planetHover, setPlanetHover] = useState(1);
  return (
    <header>
      <h1 className="logo">THE PLANETS</h1>
      <img
        src={navbarMenu}
        alt=""
        className={
          props.mobileMenu
            ? "navbar-menu-logo menu-clicked"
            : "navbar-menu-logo"
        }
        onClick={() => {
          props.setMobileMenu(!props.mobileMenu);
        }}
      />
      <nav className="navigation">
        <div
          className={props.leftSlide ? "slider-block active" : "slider-block"}
        ></div>
        <Link
          to={"/mercury"}
          className={planetHover === 1 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(1);
            props.setMobileMenu(false);
            if (props.choosePlanet === 1) {
              return;
            }

          }}
          style={planetHover === 1 ? {borderTop: "3px solid #419EBB"} : {}}
        >
          MERCURY
        </Link>
        <Link
          to={"/venus"}
          className={planetHover === 2 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(2);
            props.setMobileMenu(false);
            if (props.choosePlanet === 2) {
              return;
            }

          }}
          style={planetHover === 2 ? {borderTop: "3px solid #EDA249"} : {}}
        >
          VENUS
        </Link>
        <Link
          to={"/earth"}
          className={planetHover === 3 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(3);
            props.setMobileMenu(false);
            if (props.choosePlanet === 3) {
              return;
            }

          }}
          style={planetHover === 3 ? {borderTop: "3px solid #6D2ED5"} : {}}
        >
          EARTH
        </Link>
        <Link
          to={"/mars"}
          className={planetHover === 4 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(4);
            props.setMobileMenu(false);
            if (props.choosePlanet === 4) {
              return;
            }
   
          }}
          style={planetHover === 4 ? {borderTop: "3px solid #D14C32"} : {}}
        >
          MARS
        </Link>
        <Link
          to={"/jupiter"}
          className={planetHover === 5 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(5);
            props.setMobileMenu(false);
            if (props.choosePlanet === 5) {
              return;
            }

          }}
          style={planetHover === 5 ? {borderTop: "3px solid #D83A34"} : {}}
        >
          JUPITER
        </Link>
        <Link
          to={"/saturn"}
          className={planetHover === 6 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(6);
            props.setMobileMenu(false);
            if (props.choosePlanet === 6) {
              return;
            }

          }}
          style={planetHover === 6 ? {borderTop: "3px solid #CD5120"} : {}}
        >
          SATURN
        </Link>
        <Link
          to={"/uranus"}
          className={planetHover === 7 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(7);
            props.setMobileMenu(false);
            if (props.choosePlanet === 7) {
              return;
            }

          }}
          style={planetHover === 7 ? {borderTop: "3px solid #1EC1A2"} : {}}
        >
          URANUS
        </Link>
        <Link
          to={"/neptune"}
          className={planetHover === 8 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(8);
            props.setMobileMenu(false);
            if (props.choosePlanet === 8) {
              return;
            }

          }}
          style={planetHover === 8 ? {borderTop: "3px solid #2D68F0"} : {}}
        >
          NEPTUNE
        </Link>
      </nav>
    </header>
  );
}

export default Header;
