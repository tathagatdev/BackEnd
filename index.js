const express = require("express");
const app = express();
const connectToMongo = require("./db");
connectToMongo();







const port = 5000;

app.use(express.json());
//Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(` API listening on port ${port}`);
});
