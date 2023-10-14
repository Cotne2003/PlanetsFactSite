import { useState } from "react";
import "./Main.css";
import source from "/assets/icon-source.svg";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import data from "../../../data.json";

interface props {
  leftSlide: boolean;
}

function Main(props: props) {
  const [planetAbout, setPlanetAbout] = useState(1);
  const params = useParams();
  const planetData = data.find(
    (item) => item.name.toLocaleLowerCase() === params.planet
  );

  return (
    <>
      <main className={props.leftSlide ? "left-slide" : ""}>
        <div className="buttons-container-mobile">
          <p
            className={planetAbout === 1 ? "clicked-mobile" : ""}
            onClick={() => setPlanetAbout(1)}
          >
            OVERVIEW
          </p>
          <p
            className={planetAbout === 2 ? "clicked-mobile" : ""}
            onClick={() => setPlanetAbout(2)}
          >
            STRUCTURE
          </p>
          <p
            className={planetAbout === 3 ? "clicked-mobile" : ""}
            onClick={() => setPlanetAbout(3)}
          >
            SURFACE
          </p>
        </div>
        <div className="left-side">
          <img
            src={
              planetAbout === 1
                ? planetData?.images.planet
                : planetAbout === 2
                ? planetData?.images.internal
                : planetAbout === 3
                ? planetData?.images.planet
                : ""
            }
            alt=""
            className={
              params.planet === "mercury"
                ? "planet-mercury"
                : params.planet === "venus"
                ? "planet-venus"
                : params.planet === "earth"
                ? "planet-earth"
                : params.planet === "mars"
                ? "planet-mars"
                : params.planet === "jupiter"
                ? "planet-jupiter"
                : params.planet === "saturn"
                ? "planet-saturn"
                : params.planet === "uranus"
                ? "planet-uranus"
                : params.planet === "neptune"
                ? "planet-neptune"
                : ""
            }
          />
          {planetAbout === 3 ? (
            <img
              src={planetData?.images.geology}
              className={
                params.planet === "mercury"
                  ? "geology-mercury"
                  : params.planet === "venus"
                  ? "geology-venus"
                  : params.planet === "earth"
                  ? "geology-earth"
                  : params.planet === "mars"
                  ? "geology-mars"
                  : params.planet === "jupiter"
                  ? "geology-jupiter"
                  : params.planet === "saturn"
                  ? "geology-saturn"
                  : params.planet === "uranus"
                  ? "geology-uranus"
                  : params.planet === "neptune"
                  ? "geology-neptune"
                  : ""
              }
            ></img>
          ) : null}
        </div>
        <div className="right-side">
          <div className="description-container">
            <div className="description">
              <h1 className="planet-title">{planetData?.name.toUpperCase()}</h1>
              <p className="planet-about">
                {planetAbout === 1
                  ? planetData?.overview.content
                  : planetAbout === 2
                  ? planetData?.structure.content
                  : planetAbout === 3
                  ? planetData?.geology.content
                  : ""}
              </p>
              <div className="source">
                <p>
                  Source :{" "}
                  <a
                    href={
                      planetAbout === 1
                        ? planetData?.overview.source
                        : planetAbout === 2
                        ? planetData?.structure.source
                        : planetAbout === 3
                        ? planetData?.geology.source
                        : "#"
                    }
                  >
                    Wikipedia
                  </a>
                </p>
                <img src={source} />
              </div>
            </div>
          </div>
          <div className="buttons-container">
            <button
              className={planetAbout === 1 ? "clicked" : ""}
              onClick={() => setPlanetAbout(1)}
              style={
                params.planet === "mercury" && planetAbout === 1
                  ? { backgroundColor: "#419EBB" }
                  : params.planet === "venus" && planetAbout === 1
                  ? { backgroundColor: "#EDA249" }
                  : params.planet === "earth" && planetAbout === 1
                  ? { backgroundColor: "#6D2ED5" }
                  : params.planet === "mars" && planetAbout === 1
                  ? { backgroundColor: "#D14C32" }
                  : params.planet === "jupiter" && planetAbout === 1
                  ? { backgroundColor: "#D83A34" }
                  : params.planet === "saturn" && planetAbout === 1
                  ? { backgroundColor: "#CD5120" }
                  : params.planet === "uranus" && planetAbout === 1
                  ? { backgroundColor: "#1EC1A2" }
                  : params.planet === "neptune" && planetAbout === 1
                  ? { backgroundColor: "#2D68F0" }
                  : {}
              }
            >
              <span>01</span>OVERVIEW
            </button>
            <button
              className={planetAbout === 2 ? "clicked" : ""}
              onClick={() => setPlanetAbout(2)}
              style={
                params.planet === "mercury" && planetAbout === 2
                  ? { backgroundColor: "#419EBB" }
                  : params.planet === "venus" && planetAbout === 2
                  ? { backgroundColor: "#EDA249" }
                  : params.planet === "earth" && planetAbout === 2
                  ? { backgroundColor: "#6D2ED5" }
                  : params.planet === "mars" && planetAbout === 2
                  ? { backgroundColor: "#D14C32" }
                  : params.planet === "jupiter" && planetAbout === 2
                  ? { backgroundColor: "#D83A34" }
                  : params.planet === "saturn" && planetAbout === 2
                  ? { backgroundColor: "#CD5120" }
                  : params.planet === "uranus" && planetAbout === 2
                  ? { backgroundColor: "#1EC1A2" }
                  : params.planet === "neptune" && planetAbout === 2
                  ? { backgroundColor: "#2D68F0" }
                  : {}
              }
            >
              <span>02</span>INTERNAL STRUCTURE
            </button>
            <button
              className={planetAbout === 3 ? "clicked" : ""}
              onClick={() => setPlanetAbout(3)}
              style={
                params.planet === "mercury" && planetAbout === 3
                  ? { backgroundColor: "#419EBB" }
                  : params.planet === "venus" && planetAbout === 3
                  ? { backgroundColor: "#EDA249" }
                  : params.planet === "earth" && planetAbout === 3
                  ? { backgroundColor: "#6D2ED5" }
                  : params.planet === "mars" && planetAbout === 3
                  ? { backgroundColor: "#D14C32" }
                  : params.planet === "jupiter" && planetAbout === 3
                  ? { backgroundColor: "#D83A34" }
                  : params.planet === "saturn" && planetAbout === 3
                  ? { backgroundColor: "#CD5120" }
                  : params.planet === "uranus" && planetAbout === 3
                  ? { backgroundColor: "#1EC1A2" }
                  : params.planet === "neptune" && planetAbout === 3
                  ? { backgroundColor: "#2D68F0" }
                  : {}
              }
            >
              <span>03</span>SURFACE GEOLOGY
            </button>
          </div>
        </div>
      </main>
      <Footer
        rotationDescription={planetData?.rotation}
        revolutionDescription={planetData?.revolution}
        radiusDescription={planetData?.radius}
        averageDescription={planetData?.temperature}
      />
    </>
  );
}

export default Main;
