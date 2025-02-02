const { Router } = require("express");
const Project = require("../data/helpers/projectModel");
const { validateProjectId, validateProject } = require("../middleware/index");
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Project.get();
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ message: "Unable to get projects" });
  }
});

router.get("/:id/actions", validateProjectId, async (req, res) => {
  try {
    const { id } = req.params;
    const actions = await Project.getProjectActions(id);
    res.status(200).json({ actions });
  } catch (error) {
    res.status(500).json({ message: "Unable to get project actions" });
  }
});

router.post("/", validateProject, async (req, res) => {
  try {
    const { body } = req;
    const project = await Project.insert(body);
    res.status(200).json({ project });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to create project" });
  }
});

router.put("/:id", validateProjectId, async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const updatedProject = await Project.update(id, body);
    res.status(200).json({ updatedProject });
  } catch (error) {
    res.status(500).json({ message: "Unable to update project" });
  }
});

router.get("/:id", validateProjectId, async (req, res) => {
  try {
    const { project } = req;
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ message: "Failed to get project" });
  }
});

router.delete("/:id", validateProjectId, async (req, res) => {
  try {
    const { id } = req.params;
    const count = await Project.remove(id);
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete project" });
  }
});

module.exports = router;
