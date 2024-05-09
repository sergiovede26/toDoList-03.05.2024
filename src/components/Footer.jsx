import "../styles/footer.css";
import gitHubLogo from "../assets/github-mark.svg";

function Footer() {
  return (
    <div className="footerBar">
      <ul>
        <li>
          <a href="https://github.com/raffaellacff">
            Raffaella Florissi
          </a>
        </li>
        <li>
          <img src={gitHubLogo} alt="" />
        </li>
        <li>
          <a href="https://github.com/sergiovede26">
            Sergio Diaz
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
