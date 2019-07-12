import React, { Component } from "react";
import axios from "axios";

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
    return (
      <div>
        <h2>{name}</h2>
        <div>{description}</div>
      </div>
    );
  }
}
export default ProjectDetails;
