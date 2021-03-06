const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.use('/api/stock', require('./routes/stock'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
