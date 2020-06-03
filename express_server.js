const express = require('express');
const app = express();
const PORT = 8000;
//app.get('/',(req,res) => res.send('Battleship Game'))
app.use(express.static('public'));

app.listen(PORT,() => {
  console.log(`Listening on Port ${PORT}`);
})