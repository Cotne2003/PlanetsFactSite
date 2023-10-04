import { useState } from "react";
import "./Header.css";
import navbarMenu from "/icon-hamburger.svg";

interface props {
  setChoosePlanet: (value: number) => void;
  choosePlanet: number;
  setLeftSlide: (value: boolean) => void;
  leftSlide: boolean;
}

function Header(props: props) {
  const [planetHover, setPlanetHover] = useState(1);
  return (
    <header>
      <h1 className="logo">THE PLANETS</h1>
      <img src={navbarMenu} alt="" className="navbar-menu-logo" />
      <ul>
        <div
          className={props.leftSlide ? "slider-block active" : "slider-block"}
        ></div>
        <li
          className={planetHover === 1 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(1);
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
        </li>
        <li
          className={planetHover === 2 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(2);
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
        </li>
        <li
          className={planetHover === 3 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(3);
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
        </li>
        <li
          className={planetHover === 4 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(4);
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
        </li>
        <li
          className={planetHover === 5 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(5);
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
        </li>
        <li
          className={planetHover === 6 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(6);
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
        </li>
        <li
          className={planetHover === 7 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(7);
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
        </li>
        <li
          className={planetHover === 8 ? "planet-clicked" : ""}
          onClick={() => {
            setPlanetHover(8);
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
        </li>
      </ul>
    </header>
  );
}

export default Header;
