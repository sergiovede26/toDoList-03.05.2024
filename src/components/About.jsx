import "../styles/about.css";
import { Home } from "react-feather";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <section>
        <div className="ourProfiles">
          <section>
            <div className="profileCard">
              <h1>Raffaella Florissi</h1>
              <h2>Ironhack student</h2>
              <p>
                She is an amazing Web Development Student and Cat Lover. She
                will not stop learning React and Javascript!{" "}
              </p>
              <span>
                <a href="https://github.com/raffaellacff/toDoList-03.05.2024">
                  GitHub Profile
                </a>
              </span>
            </div>
            <div className="profileCard">
              <h1>Sergio Diaz</h1>
              <h2>Ironhack student</h2>
              <p>
                He is a stubborn and impatient student who wants to continue
                learning more from React.js{" "}
              </p>
              <span>
                <a href="https://github.com/sergiovede26/toDoList-03.05.2024">
                  GitHub Profile
                </a>
              </span>
            </div>
          </section>
      
          <NavLink to="/"className={"goHomeLink"}><Home size="30" className={"goHomeIcon"}/></NavLink>
        </div>
      </section>
    </div>
  );
}

export default About;
