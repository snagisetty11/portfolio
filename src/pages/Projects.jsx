import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const [query, setQuery] = useState("");

  const normalized = query.trim().toLowerCase();

  const visible = projects.filter((project) =>
    `${project.title} ${project.category} ${project.technologies.join(" ")}`
      .toLowerCase()
      .includes(normalized)
  );

  return (
    <section>
      <h1>My Projects</h1>

      <p>
        Explore some of the applications and projects
        I've worked on during my computer science studies.
      </p>

      <label htmlFor="project-search">
        Search Projects
      </label>

      <input
        id="project-search"
        type="text"
        placeholder="Search by name, category, or technology"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <p role="status">
        {visible.length} project(s) found
      </p>

      {visible.length > 0 ? (
        <div className="grid">
          {visible.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      ) : (
        <p>No projects match your search. Try another term.</p>
      )}
    </section>
  );
}
