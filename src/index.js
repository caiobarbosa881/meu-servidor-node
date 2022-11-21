const express = require('express');
const app = express();
const port = 80;

const userRoute = require('./routes/User');

app.use('/user', userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})