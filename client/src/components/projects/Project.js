import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledProject = styled.div`
  margin: 1rem auto;
  background: white;
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;

  h1 {
    text-align: center;
    color: #444;
  }
`;

const StyledName = styled(Link)`
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
`;

const Project = ({ project }) => {
  return (
    <StyledProject>
      <StyledName to={`project/${project.id}`}>
        <h2>{project.name}</h2>
      </StyledName>
    </StyledProject>
  );
};

export default Project;
