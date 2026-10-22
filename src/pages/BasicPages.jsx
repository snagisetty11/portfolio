import { Link } from "react-router";

export function Home() {
  return (
    <section>
      <h1>Srihan Nagisetty</h1>
      <h2>Computer Science & Finance Student</h2>

      <p>
        I'm a Computer Science student at Saint Louis University
        with a minor in Finance. I'm interested in software
        engineering, financial technology, and solving
        real-world problems through programming.
      </p>

      <Link to="/projects">Explore My Projects</Link>
    </section>
  );
}

export function Experience() {
  return (
    <section>
      <h1>Experience & Skills</h1>

      <h2>Education</h2>
      <p>
        Saint Louis University — Computer Science
        with a minor in Finance
      </p>

      <h2>Technical Skills</h2>
      <ul>
        <li>Python</li>
        <li>JavaScript, HTML, and CSS</li>
        <li>C++</li>
        <li>Object-Oriented Programming</li>
        <li>Git and GitHub</li>
      </ul>

      <h2>Relevant Experience</h2>

      <h3>Software Development Coursework</h3>
      <p>
        Completed programming assignments involving
        object-oriented design, software testing,
        debugging, and application development.
        Gained experience developing and improving
        software solutions through hands-on projects.
      </p>

      <h3>SLU Campus Kitchen — Volunteer</h3>
      <p>
        Volunteer with SLU Campus Kitchen to help
        distribute meals to individuals experiencing
        homelessness in the St. Louis community.
        Contribute to community service efforts
        through teamwork and collaboration.
      </p>
    </section>
  );
}

export function Contact() {
  return (
    <section>
      <h1>Contact</h1>

      <p>
        I'm interested in opportunities involving
        software engineering, technology, and finance.
      </p>

      <p>
        Visit my GitHub profile:{" "}
        <a
          href="https://github.com/snagisetty11"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/snagisetty11
        </a>
      </p>
    </section>
  );
}

export function NotFound() {
  return (
    <section>
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Return Home</Link>
    </section>
  );
}
