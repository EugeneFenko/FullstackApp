/* eslint-disable no-console */
const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const orderRoutes = require('./routes/order');
const categoryRoutes = require('./routes/category');
const positionRoutes = require('./routes/position');
const db = require('./config/vars');

const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose
  .connect(db.mongoURI)
  .then(() => console.log('MongoDB connected!'))
  .catch(() => console.log('Error DB!'));

app.use(passport.initialize());
require('./middleware/passport.js')(passport);
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())
app.use(express.json());

app.use(require('cors')());
app.use(require('morgan')('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;
