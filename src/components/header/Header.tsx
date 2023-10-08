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
            setTimeout(() => {
              props.setChoosePlanet(1);
            }, 1500);
            props.setLeftSlide(!props.leftSlide);
            setTimeout(() => {
              props.setLeftSlide(false);
            }, 1500);
          }}
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
            setTimeout(() => {
              props.setChoosePlanet(2);
            }, 1500);
            props.setLeftSlide(!props.leftSlide);
            setTimeout(() => {
              props.setLeftSlide(false);
            }, 1500);
          }}
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
            setTimeout(() => {
              props.setChoosePlanet(3);
            }, 1500);
            props.setLeftSlide(!props.leftSlide);
            setTimeout(() => {
              props.setLeftSlide(false);
            }, 1500);
          }}
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
            setTimeout(() => {
              props.setChoosePlanet(4);
            }, 1500);
            props.setLeftSlide(!props.leftSlide);
            setTimeout(() => {
              props.setLeftSlide(false);
            }, 1500);
          }}
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
            setTimeout(() => {
              props.setChoosePlanet(5);
            }, 1500);
            props.setLeftSlide(!props.leftSlide);
            setTimeout(() => {
              props.setLeftSlide(false);
            }, 1500);
          }}
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
            setTimeout(() => {
              props.setChoosePlanet(6);
            }, 1500);
            props.setLeftSlide(!props.leftSlide);
            setTimeout(() => {
              props.setLeftSlide(false);
            }, 1500);
          }}
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
            setTimeout(() => {
              props.setChoosePlanet(7);
            }, 1500);
            props.setLeftSlide(!props.leftSlide);
            setTimeout(() => {
              props.setLeftSlide(false);
            }, 1500);
          }}
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
            setTimeout(() => {
              props.setChoosePlanet(8);
            }, 1500);
            props.setLeftSlide(!props.leftSlide);
            setTimeout(() => {
              props.setLeftSlide(false);
            }, 1500);
          }}
        >
          NEPTUNE
        </Link>
      </nav>
    </header>
  );
}

export default Header;
