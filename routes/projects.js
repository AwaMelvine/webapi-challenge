const { Router } = require("express");
const Project = require("../data/helpers/projectModel");
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Project.get();
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ message: "Unable to get projects" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { body } = req;
    const project = await Project.insert(body);
    res.status(200).json({ project });
  } catch (error) {
    res.status(500).json({ message: "Unable to create project" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const project = await Project.get(id);
    if (!project) {
      return res.status(404).json({ message: "The project does not exist" });
    }
    const updatedProject = await Project.update(id, body);
    res.status(200).json({ updatedProject });
  } catch (error) {
    res.status(500).json({ message: "Unable to create project" });
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
    res.status(500).json({ message: "Failed to get project" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const count = await Project.remove(id);
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: "Failed to get project" });
  }
});

module.exports = router;
