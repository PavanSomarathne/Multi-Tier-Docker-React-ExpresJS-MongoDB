const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

const adminRoutes = require("./routes/AdminRoutes");
const userRoutes = require("./routes/UserRoutes");

const app = express();

const PORT = 5000;

// mogoDB connection
db().catch(err => console.log(err));

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.get('/', (req, res) => {
  res.json('Hello Hashini !');
});

// start server
app.listen(PORT, () => {
  console.log(`API is listening on PORT: ${PORT}`);
});