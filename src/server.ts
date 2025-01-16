const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (_req: any, res: any) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;