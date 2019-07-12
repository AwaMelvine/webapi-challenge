const { Router } = require("express");
const Project = require("../data/helpers/projectModel");
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Project.get();
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: "Unable to get projects" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { body } = req;
    const project = await Project.insert(body);
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ error: "Unable to create project" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.get(id);
    if (!project) {
      return res
        .status(404)
        .json({ message: "Requested project does not exist" });
    }
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ error: "Failed to get project" });
  }
});

module.exports = router;
