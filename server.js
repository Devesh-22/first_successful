const express = require('express');
const app = express();

console.log("Server starting up...");

app.get('/', (req, res) => {
  console.log("Received request at /");
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
