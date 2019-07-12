import React from "react";
import { Route } from "react-router-dom";
import ProjectContainer from "./components/projects/ProjectContainer";

function App() {
  return (
    <div>
      <Route exact path="/" component={ProjectContainer} />
      <Route path="/project/:id" component={() => <div>test</div>} />
    </div>
  );
}

export default App;
