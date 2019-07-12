const Project = require("../data/helpers/projectModel");

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
  }
};
