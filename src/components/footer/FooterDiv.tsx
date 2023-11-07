import "./FooterDiv.css";

interface props {
  title: string | undefined;
  description: string | undefined;
}

function FooterDiv(props: props) {
  return (
    <div className="footer-div">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default FooterDiv;
