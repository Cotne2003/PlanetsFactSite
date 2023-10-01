import "./Header.css";

interface props {
  setChoosePlanet: (value: number) => void;
  choosePlanet: number;
  slideHandleClick: () => void;
}

function Header(props: props) {
  return (
    <header>
      <h1 className="logo">THE PLANETS</h1>
      <ul>
        <li
          className={props.choosePlanet === 1 ? "planet-clicked" : ""}
          onClick={() => props.setChoosePlanet(1)}
        >
          MERCURY
        </li>
        <li
          className={props.choosePlanet === 2 ? "planet-clicked" : ""}
          onClick={() => props.setChoosePlanet(2)}
        >
          VENUS
        </li>
        <li
          className={props.choosePlanet === 3 ? "planet-clicked" : ""}
          onClick={() => props.setChoosePlanet(3)}
        >
          EARTH
        </li>
        <li
          className={props.choosePlanet === 4 ? "planet-clicked" : ""}
          onClick={() => props.setChoosePlanet(4)}
        >
          MARS
        </li>
        <li
          className={props.choosePlanet === 5 ? "planet-clicked" : ""}
          onClick={() => props.setChoosePlanet(5)}
        >
          JUPITER
        </li>
        <li
          className={props.choosePlanet === 6 ? "planet-clicked" : ""}
          onClick={() => props.setChoosePlanet(6)}
        >
          SATURN
        </li>
        <li
          className={props.choosePlanet === 7 ? "planet-clicked" : ""}
          onClick={() => props.setChoosePlanet(7)}
        >
          URANUS
        </li>
        <li
          className={props.choosePlanet === 8 ? "planet-clicked" : ""}
          onClick={() => props.setChoosePlanet(8)}
        >
          NEPTUNE
        </li>
      </ul>
    </header>
  );
}

export default Header;
