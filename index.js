const express = require("express");
const projectRoutes = require("./routes/projects");
const app = express();

app.use(express.json());

app.use("/api/projects", projectRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on localhost:${port}`));
