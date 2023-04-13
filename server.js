const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const cors = require("cors");
const upload = multer({ dest: "uploads/" });
const port = 3000;
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678!",
  database: "445Assignment2",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: " + err.stack);
    return;
  }
  console.log(
    "Connected to MySQL database with connection id " + connection.threadId
  );
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.post(
  "/upload",
  upload.fields([{ name: "fileName" }, { name: "fileData" }]),
  (req, res) => {
    let fileName = req.body.fileName;
    let fileData = req.files["fileData"];

    // Execute a query to insert the streamlet data and filename into your table
    const query = `INSERT INTO streamlets (name, data) VALUES (?, ?)`;
    connection.query(query, [fileName, fileData], (error, results) => {
      if (error) {
        console.error(`Error inserting streamlet into database: ${error}`);
        res
          .status(500)
          .send(`Error inserting streamlet into database: ${error}`);
      } else {
        console.log(`Streamlet ${fileName} uploaded successfully`);
        res.send(`Streamlet ${fileName} uploaded successfully`);
      }
    });
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
