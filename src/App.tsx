import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import DATA from "./components/DATA";
import { useState } from "react";

function App() {
  const [choosePlanet, setChoosePlanet] = useState(1);

  return (
    <>
      <Header setChoosePlanet={setChoosePlanet} choosePlanet={choosePlanet} />
      {choosePlanet === 1 ? (
        <Main
          imgOverview={DATA.mercury.imgOverview}
          imgInternal={DATA.mercury.imgInternal}
          imgGeology={DATA.mercury.imgGeology}
          title={DATA.mercury.title}
          overview={DATA.mercury.overview}
          internalStructure={DATA.mercury.internalStructure}
          surfaceGeology={DATA.mercury.surfaceGeology}
          rotationDescription={DATA.mercury.rotationDescription}
          revolutionDescription={DATA.mercury.revolutionDescription}
          radiusDescription={DATA.mercury.radiusDescription}
          averageDescription={DATA.mercury.averageDescription}
        />
      ) : choosePlanet === 2 ? (
        <Main
          imgOverview={DATA.venus.imgOverview}
          imgInternal={DATA.venus.imgInternal}
          imgGeology={DATA.venus.imgGeology}
          title={DATA.venus.title}
          overview={DATA.venus.overview}
          internalStructure={DATA.venus.internalStructure}
          surfaceGeology={DATA.venus.surfaceGeology}
          rotationDescription={DATA.venus.rotationDescription}
          revolutionDescription={DATA.venus.revolutionDescription}
          radiusDescription={DATA.venus.radiusDescription}
          averageDescription={DATA.venus.averageDescription}
        />
      ) : choosePlanet === 3 ? (
        <Main
          imgOverview={DATA.earth.imgOverview}
          imgInternal={DATA.earth.imgInternal}
          imgGeology={DATA.earth.imgGeology}
          title={DATA.earth.title}
          overview={DATA.earth.overview}
          internalStructure={DATA.earth.internalStructure}
          surfaceGeology={DATA.earth.surfaceGeology}
          rotationDescription={DATA.earth.rotationDescription}
          revolutionDescription={DATA.earth.revolutionDescription}
          radiusDescription={DATA.earth.radiusDescription}
          averageDescription={DATA.earth.averageDescription}
        />
      ) : choosePlanet === 4 ? (
        <Main
          imgOverview={DATA.mars.imgOverview}
          imgInternal={DATA.mars.imgInternal}
          imgGeology={DATA.mars.imgGeology}
          title={DATA.mars.title}
          overview={DATA.mars.overview}
          internalStructure={DATA.mars.internalStructure}
          surfaceGeology={DATA.mars.surfaceGeology}
          rotationDescription={DATA.mars.rotationDescription}
          revolutionDescription={DATA.mars.revolutionDescription}
          radiusDescription={DATA.mars.radiusDescription}
          averageDescription={DATA.mars.averageDescription}
        />
      ) : choosePlanet === 5 ? (
        <Main
          imgOverview={DATA.jupiter.imgOverview}
          imgInternal={DATA.jupiter.imgInternal}
          imgGeology={DATA.jupiter.imgGeology}
          title={DATA.jupiter.title}
          overview={DATA.jupiter.overview}
          internalStructure={DATA.jupiter.internalStructure}
          surfaceGeology={DATA.jupiter.surfaceGeology}
          rotationDescription={DATA.jupiter.rotationDescription}
          revolutionDescription={DATA.jupiter.revolutionDescription}
          radiusDescription={DATA.jupiter.radiusDescription}
          averageDescription={DATA.jupiter.averageDescription}
        />
      ) : choosePlanet === 6 ? (
        <Main
          imgOverview={DATA.saturn.imgOverview}
          imgInternal={DATA.saturn.imgInternal}
          imgGeology={DATA.saturn.imgGeology}
          title={DATA.saturn.title}
          overview={DATA.saturn.overview}
          internalStructure={DATA.saturn.internalStructure}
          surfaceGeology={DATA.saturn.surfaceGeology}
          rotationDescription={DATA.saturn.rotationDescription}
          revolutionDescription={DATA.saturn.revolutionDescription}
          radiusDescription={DATA.saturn.radiusDescription}
          averageDescription={DATA.saturn.averageDescription}
        />
      ) : choosePlanet === 7 ? (
        <Main
          imgOverview={DATA.uranus.imgOverview}
          imgInternal={DATA.uranus.imgInternal}
          imgGeology={DATA.uranus.imgGeology}
          title={DATA.uranus.title}
          overview={DATA.uranus.overview}
          internalStructure={DATA.uranus.internalStructure}
          surfaceGeology={DATA.uranus.surfaceGeology}
          rotationDescription={DATA.uranus.rotationDescription}
          revolutionDescription={DATA.uranus.revolutionDescription}
          radiusDescription={DATA.uranus.radiusDescription}
          averageDescription={DATA.uranus.averageDescription}
        />
      ) : choosePlanet === 7 ? (
        <Main
          imgOverview={DATA.uranus.imgOverview}
          imgInternal={DATA.uranus.imgInternal}
          imgGeology={DATA.uranus.imgGeology}
          title={DATA.uranus.title}
          overview={DATA.uranus.overview}
          internalStructure={DATA.uranus.internalStructure}
          surfaceGeology={DATA.uranus.surfaceGeology}
          rotationDescription={DATA.uranus.rotationDescription}
          revolutionDescription={DATA.uranus.revolutionDescription}
          radiusDescription={DATA.uranus.radiusDescription}
          averageDescription={DATA.uranus.averageDescription}
        />
      ) : choosePlanet === 7 ? (
        <Main
          imgOverview={DATA.uranus.imgOverview}
          imgInternal={DATA.uranus.imgInternal}
          imgGeology={DATA.uranus.imgGeology}
          title={DATA.uranus.title}
          overview={DATA.uranus.overview}
          internalStructure={DATA.uranus.internalStructure}
          surfaceGeology={DATA.uranus.surfaceGeology}
          rotationDescription={DATA.uranus.rotationDescription}
          revolutionDescription={DATA.uranus.revolutionDescription}
          radiusDescription={DATA.uranus.radiusDescription}
          averageDescription={DATA.uranus.averageDescription}
        />
      ) : choosePlanet === 7 ? (
        <Main
          imgOverview={DATA.uranus.imgOverview}
          imgInternal={DATA.uranus.imgInternal}
          imgGeology={DATA.uranus.imgGeology}
          title={DATA.uranus.title}
          overview={DATA.uranus.overview}
          internalStructure={DATA.uranus.internalStructure}
          surfaceGeology={DATA.uranus.surfaceGeology}
          rotationDescription={DATA.uranus.rotationDescription}
          revolutionDescription={DATA.uranus.revolutionDescription}
          radiusDescription={DATA.uranus.radiusDescription}
          averageDescription={DATA.uranus.averageDescription}
        />
      ) : choosePlanet === 8 ? (
        <Main
          imgOverview={DATA.neptune.imgOverview}
          imgInternal={DATA.neptune.imgInternal}
          imgGeology={DATA.neptune.imgGeology}
          title={DATA.neptune.title}
          overview={DATA.neptune.overview}
          internalStructure={DATA.neptune.internalStructure}
          surfaceGeology={DATA.neptune.surfaceGeology}
          rotationDescription={DATA.neptune.rotationDescription}
          revolutionDescription={DATA.neptune.revolutionDescription}
          radiusDescription={DATA.neptune.radiusDescription}
          averageDescription={DATA.neptune.averageDescription}
        />
      ) : null}
    </>
  );
}

export default App;
