import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledProjectDetails = styled.div`
  width: 50%;
  margin: 2rem auto;
  background: white;
  padding: 2rem;

  h2 {
    font-family: "Courier New", Courier, monospace;
    text-align: center;
  }

  .description {
    font-size: 1.1rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const apiUrl = "http://localhost:5000";

class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {}
    };
  }

  async componentDidMount() {
    try {
      const { id } = this.props.match.params;
      const res = await axios.get(`${apiUrl}/api/projects/${id}`);
      this.setState({ project: res.data.project });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { name, description } = this.state.project;
    const actions = this.state.project.actions;
    return (
      <StyledProjectDetails>
        <Link to="/">Back</Link>
        <h2>{name}</h2>
        <div className="description">{description}</div>
        {actions && (
          <div>
            <h2>Actions</h2>
            <ul>{actions && actions.map(action => <li>{action.notes}</li>)}</ul>
          </div>
        )}
      </StyledProjectDetails>
    );
  }
}
export default ProjectDetails;
