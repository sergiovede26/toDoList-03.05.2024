import "../styles/footer.css";
import gitHubLogo from "../assets/github-mark.svg";

function Footer() {
  return (
    <div className="footerBar">
      <ul>
        <li>
          <a href="https://github.com/raffaellacff/toDoList-03.05.2024">
            Raffaella Florissi
          </a>
        </li>
        <li>
          <img src={gitHubLogo} alt="" />
        </li>
        <li>
          <a href="https://github.com/sergiovede26/toDoList-03.05.2024">
            Sergio Diaz
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
