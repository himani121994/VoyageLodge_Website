const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const adminRouter = require('./Routers/Admin.routers');
const userRouter = require('./Routers/User.routers');
const mongoose = require('mongoose');
require('dotenv').config();

// Database connection
mongoose.connect(process.env.DATABASE_URL);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/dashboard', adminRouter);
app.use('/home', userRouter);

app.listen(8000, () => {
  console.log('App is running on port 8000');
});
