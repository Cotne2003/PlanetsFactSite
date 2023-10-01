import { useState } from "react";
import "./Main.css";
import source from "/icon-source.svg";
import { mainProps } from "../DATA";
import Footer from "../footer/Footer";

function Main(props: mainProps) {
  const [planetAbout, setPlanetAbout] = useState(1);

  return (
    <>
      <main>
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
            className="planet"
          />
          {planetAbout === 3 ? (
            <img src={props.imgGeology} className="geology"></img>
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
