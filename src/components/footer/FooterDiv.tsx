import "./FooterDiv.css";

interface props {
  title: string;
  description: string;
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
