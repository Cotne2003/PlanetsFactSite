import { useState } from "react";
import "./Main.css";
import source from "/icon-source.svg";
import { mainProps } from "../DATA";
import Footer from "../footer/Footer";

function Main(props: mainProps) {
  const [planetAbout, setPlanetAbout] = useState(1);

  return (
    <>
      <main className={props.leftSlide ? "left-slide" : ""}>
        <div className="left-side">
          <img
            src={
              planetAbout === 1
                ? props.imgOverview
                : planetAbout === 2
                ? props.imgInternal
                : planetAbout === 3
                ? props.imgOverview
                : ""
            }
            alt="mercury"
            className={
              props.choosePlanet === 1
                ? "planet-mercury"
                : props.choosePlanet === 2
                ? "planet-venus"
                : props.choosePlanet === 3
                ? "planet-earth"
                : props.choosePlanet === 4
                ? "planet-mars"
                : props.choosePlanet === 5
                ? "planet-jupiter"
                : props.choosePlanet === 6
                ? "planet-saturn"
                : props.choosePlanet === 7
                ? "planet-uranus"
                : props.choosePlanet === 8
                ? "planet-neptune"
                : ""
            }
          />
          {planetAbout === 3 ? (
            <img
              src={props.imgGeology}
              className={
                props.choosePlanet === 1
                  ? "geology-mercury"
                  : props.choosePlanet === 2
                  ? "geology-venus"
                  : props.choosePlanet === 3
                  ? "geology-earth"
                  : props.choosePlanet === 4
                  ? "geology-mars"
                  : props.choosePlanet === 5
                  ? "geology-jupiter"
                  : props.choosePlanet === 6
                  ? "geology-saturn"
                  : props.choosePlanet === 7
                  ? "geology-uranus"
                  : props.choosePlanet === 8
                  ? "geology-neptune"
                  : ""
              }
            ></img>
          ) : null}
        </div>
        <div className="right-side">
          <div className="description-container">
            <div className="description">
              <h1 className="planet-title">{props.title}</h1>
              <p className="planet-about">
                {planetAbout === 1
                  ? props.overview
                  : planetAbout === 2
                  ? props.internalStructure
                  : planetAbout === 3
                  ? props.surfaceGeology
                  : ""}
              </p>
              <div className="source">
                <p>
                  Source : <a href="#">Wikipedia</a>
                </p>
                <img src={source} />
              </div>
            </div>
          </div>
          <div className="buttons-container">
            <button
              className={planetAbout === 1 ? "clicked" : ""}
              onClick={() => setPlanetAbout(1)}
            >
              <span>01</span>OVERVIEW
            </button>
            <button
              className={planetAbout === 2 ? "clicked" : ""}
              onClick={() => setPlanetAbout(2)}
            >
              <span>02</span>INTERNAL STRUCTURE
            </button>
            <button
              className={planetAbout === 3 ? "clicked" : ""}
              onClick={() => setPlanetAbout(3)}
            >
              <span>03</span>SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </main>
      <Footer
        rotationDescription={props.rotationDescription}
        revolutionDescription={props.revolutionDescription}
        radiusDescription={props.radiusDescription}
        averageDescription={props.averageDescription}
      />
    </>
  );
}

export default Main;
