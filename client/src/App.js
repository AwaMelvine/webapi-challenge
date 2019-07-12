import React from "react";
import { Route } from "react-router-dom";
import ProjectContainer from "./components/projects/ProjectContainer";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  return (
    <div>
      <Route exact path="/" component={ProjectContainer} />
      <Route
        path="/project/:id"
        render={props => <ProjectDetails {...props} />}
      />
    </div>
  );
}

export default App;
