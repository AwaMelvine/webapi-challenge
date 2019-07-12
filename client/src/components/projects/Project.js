import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div>
      <Link to={`project/${project.id}`}>
        <h2>{project.name}</h2>
      </Link>
    </div>
  );
};

export default Project;
