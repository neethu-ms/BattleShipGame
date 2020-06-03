const express = require('express');
const app = express();
const PORT = 8000;
app.get('/',(req,res) => res.send('Battleship Game'))
app.listen(PORT,() => {
  console.log(`Listening on Port ${PORT}`);
})