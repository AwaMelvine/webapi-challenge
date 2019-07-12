const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/projects");
const actionRoutes = require("./routes/actions");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/actions", actionRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on localhost:${port}`));
