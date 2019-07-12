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

module.exports = router;
