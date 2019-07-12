const { Router } = require("express");
const Action = require("../data/helpers/actionModel");
const { validateAction, validateActionId } = require("../middleware");
const router = new Router();

router.get("/", async (req, res) => {
  try {
    const actions = await Action.get();
    res.status(200).json({ actions });
  } catch (error) {
    res.status(500).json({ message: "Unable to get actions" });
  }
});

router.post("/", validateAction, async (req, res) => {
  try {
    const { body } = req;
    const action = await Action.insert(body);
    res.status(200).json({ action });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to create actions" });
  }
});

router.put("/:id", validateActionId, async (req, res) => {
  try {
    const { body } = req;

    if (!!body) {
      return res.status(400).json({ message: "missing action data" });
    }

    const { id } = req.params;
    const updatedAction = await Action.update(id, body);
    res.status(200).json({ updatedAction });
  } catch (error) {
    res.status(500).json({ message: "Unable to update action" });
  }
});

router.get("/:id", validateActionId, async (req, res) => {
  try {
    const { action } = req;
    res.status(200).json({ action });
  } catch (error) {
    res.status(500).json({ message: "Failed to get action" });
  }
});

router.delete("/:id", validateActionId, async (req, res) => {
  try {
    const { id } = req.params;
    const count = await Action.remove(id);
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete action" });
  }
});

module.exports = router;
