const express = require("express");
const cors = require("cors");
const connectDatabase = require("./helpers/connectToDatabase");

//Database Connection
connectDatabase();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is started on PORT:", PORT);
});
