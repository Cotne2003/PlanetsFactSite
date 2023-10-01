import "./Footer.css";
import FooterDiv from "./FooterDiv";
import { footerProps } from "../DATA";

function Footer(props: footerProps) {
  return (
    <footer>
      <FooterDiv
        title="ROTATION TIME"
        description={props.rotationDescription}
      />
      <FooterDiv
        title="REVOLUTION TIME"
        description={props.revolutionDescription}
      />
      <FooterDiv title="RADIUS" description={props.radiusDescription} />
      <FooterDiv title="AVERAGE TEMP." description={props.averageDescription} />
    </footer>
  );
}

export default Footer;
