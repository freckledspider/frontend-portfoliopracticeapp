import { useLoaderData } from "react-router-dom";

function Projects(props) {

  const projects = useLoaderData()

    return projects.map((project) => (
      <div class="content">
        <h2>{project.name}</h2>
        <img src={project.image} /><br/>
        <a href={project.git}>Github</a> | 
        <a href={project.live}> Live Demo</a>
      </div>
    ));
}

export default Projects;