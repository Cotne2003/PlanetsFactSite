import "./MobileMenu.css";
import mercury from "/assets/planet-mercury.svg";
import venus from "/assets/planet-venus.svg";
import earth from "/assets/planet-earth.svg";
import mars from "/assets/planet-mars.svg";
import jupiter from "/assets/planet-jupiter.svg";
import saturn from "/assets/planet-saturn.svg";
import uranus from "/assets/planet-uranus.svg";
import neptune from "/assets/planet-neptune.svg";
import vector from "/assets/icon-chevron.svg";
import { Link } from "react-router-dom";

interface props {
  setChoosePlanet: (value: number) => void;
  setMobileMenu: (value: boolean) => void;
}

export default function MobileMenu(props: props) {
  return (
    <div className="mobile-menu">
      <ul>
        <Link
          to={"/mercury"}
          onClick={() => {
            props.setChoosePlanet(1);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={mercury} alt="" />
            <span>mercury</span>
          </div>
          <img src={vector} alt="" />
        </Link>
        <Link
          to={"/venus"}
          onClick={() => {
            props.setChoosePlanet(2);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={venus} alt="" />
            <span>venus</span>
          </div>
          <img src={vector} alt="" />
        </Link>
        <Link
          to={"/earth"}
          onClick={() => {
            props.setChoosePlanet(3);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={earth} alt="" />
            <span>earth</span>
          </div>
          <img src={vector} alt="" />
        </Link>
        <Link
          to={"/mars"}
          onClick={() => {
            props.setChoosePlanet(4);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={mars} alt="" />
            <span>mars</span>
          </div>
          <img src={vector} alt="" />
        </Link>
        <Link
          to={"/jupiter"}
          onClick={() => {
            props.setChoosePlanet(5);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={jupiter} alt="" />
            <span>jupiter</span>
          </div>
          <img src={vector} alt="" />
        </Link>
        <Link
          to={"/saturn"}
          onClick={() => {
            props.setChoosePlanet(6);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={saturn} alt="" />
            <span>saturn</span>
          </div>
          <img src={vector} alt="" />
        </Link>
        <Link
          to={"/uranus"}
          onClick={() => {
            props.setChoosePlanet(7);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={uranus} alt="" />
            <span>uranus</span>
          </div>
          <img src={vector} alt="" />
        </Link>
        <Link
          to={"/neptune"}
          onClick={() => {
            props.setChoosePlanet(8);
            props.setMobileMenu(false);
          }}
        >
          <div>
            <img src={neptune} alt="" />
            <span>neptune</span>
          </div>
          <img src={vector} alt="" />
        </Link>
      </ul>
    </div>
  );
}
