const express = require("express")
const fs = require('fs');

const app = express();

const getJsonData = (file) =>
  JSON.parse(fs.readFileSync(`${__dirname}/jsonData/${file}.json`, 'utf-8'));
let data = '';


app.get('/users', (req, res) =>{
  data = getJsonData("users");
  res.status(200).json(data)
})

app.get('/docs', (req, res) =>{
  data = getJsonData("docs");
  res.status(200).json(data)
})

app.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada" });
});

const port = 3300

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
