import "./Footer.css";
import FooterDiv from "./FooterDiv";

type footerProps = {
  rotationDescription: string | undefined;
  revolutionDescription: string | undefined;
  radiusDescription: string | undefined;
  averageDescription: string | undefined;
};

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
