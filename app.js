const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({status: 'OK'});
});

app.listen(2300, () => {
  console.log(`Listining on port: 3000`);
});
