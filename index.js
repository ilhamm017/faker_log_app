const express = require('express');
const app = express();
const route = require('./routes/route')

app.use(route)

const port = 4000;
app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});
