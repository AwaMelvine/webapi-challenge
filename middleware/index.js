const Project = require("../data/helpers/projectModel");
const Action = require("../data/helpers/actionModel");

module.exports = {
  async validateProjectId(req, res, next) {
    const id = Number.parseInt(req.params.id, 10);
    if (Number.isInteger(id)) {
      const project = await Project.get(id);
      if (project) {
        req.project = project;
        next();
      } else {
        res.status(404).json({ message: "There's no project with that id" });
      }
    } else {
      res.status(400).json({ message: "invalid project id" });
    }
  },

  validateProject(req, res, next) {
    if (!req.body) {
      return res.status(400).json({ message: "missing project data" });
    }
    if (!req.body.name) {
      return res
        .status(400)
        .json({ message: "Project must have at least a name" });
    }
    next();
  },

  async validateActionId(req, res, next) {
    const id = Number.parseInt(req.params.id, 10);
    if (Number.isInteger(id)) {
      const action = await Action.get(id);
      if (action) {
        req.action = action;
        next();
      } else {
        res.status(404).json({ message: "There's no action with that id" });
      }
    } else {
      res.status(400).json({ message: "invalid action id" });
    }
  },

  validateAction(req, res, next) {
    if (!req.body) {
      return res.status(400).json({ message: "missing action data" });
    }
    if (!req.body.notes) {
      return res
        .status(400)
        .json({ message: "Action must have at least notes" });
    }
    next();
  }
};
