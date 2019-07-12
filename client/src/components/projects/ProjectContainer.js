import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const apiUrl = "http://localhost:5000";

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
      <div>
        {projects.map(project => (
          <h2>{project.name}</h2>
        ))}
      </div>
    );
  }
}

export default ProjectContainer;
