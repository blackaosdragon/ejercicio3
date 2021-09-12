const express = require('express');
const bodyParser = require('body-parser');

const port = 5000;

const app = express();
//const jsonParser

let value = 0;
let actualValue = 0;

app.listen(port,()=>{
    console.log(`Escuchando por el puerto ${port}`);
})
app.use(express.json());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

app.get("/", (req,res)=>{
    console.log("Exito!")
    let message = {
        ok: 1,
        value: actualValue
    }
    res.json(message)
})
app.post('/add', (req,res)=>{
    const { value } = req.body;
    let message = {
        ok: 1,
        value: value
    }
    res.json(message).status(200);
})
app.post('/substract', (req,res)=>{
    const { value } = req.body;
    let message = {
        ok: 1,
        value: value
    }
    res.json(message).status(200);
})
app.post('/divide', (req,res)=>{
    const { value } = req.body;
    let message = {
        ok: 1,
        value: value
    }
    res.json(message).status(200);
})
app.post('/refresh', (req,res)=>{
    const { value } = req.body;
    actualValue = value
    let message = {
        ok: 1,
        value: value
    }
    res.json(message).status(200);
})