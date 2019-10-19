const express = require('express');
const morgan = require('morgan');

const app = express();

// Dev logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Profile route
// app.use('/api', require('./routes/stock'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
