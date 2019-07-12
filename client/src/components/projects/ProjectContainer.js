import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Project from "./Project";

const apiUrl = "http://localhost:5000";

const StyledProjectList = styled.div`
  width: 50%;
  margin: 2rem auto;
  background: white;
  padding: 2rem;

  h1 {
    text-align: center;
    color: #444;
    font-family: "Courier New", Courier, monospace;
  }
`;

class ProjectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    this.getProjects();
  }
  async getProjects() {
    try {
      const res = await axios.get(`${apiUrl}/api/projects`);
      this.setState({ projects: res.data.projects });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { projects } = this.state;
    return (
      <StyledProjectList>
        <h1>Recent Projects</h1>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </StyledProjectList>
    );
  }
}

export default ProjectContainer;
