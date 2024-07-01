
const express = require('express')

const path = require('path');
const PORT = process.env.PORT || 80; //tourner sur le port precisé ou 5000 sinon
const HOST = process.env.HOST;

const app = express()  // appel du constructor of express


app.use('/',express.static(path.join(__dirname,'angular'))); //module de node permet de gerer system de fichier (chemin independament de environ)

app.get('',(req, res) => {
res.sendFile(path.join(__dirname,'angular','index.html'));
});

app.listen(PORT,()=>{
console.log(`server running at http://${HOST}:${PORT}`);
});

