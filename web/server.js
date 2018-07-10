const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const moduleAcess = require('./moduleAcess.js');

app.listen(3000, "0.0.0.0", () => {
    console.log('listening at port 3000');
})

app.get('/', (req, res) => {
    res.status(200).send('database sample application');
})

app.get('/api/carsapp', async (req, res) => {
    const cars = await moduleAcess.getCars();
    res.status(200).send(cars);
})

app.get('/api/carsapp/:id', async (req, res) => {
    const id = req.params.id;
    const result = await moduleAcess.getCarById(id);
    if (result) {
        res.status(200).send(result);
    } else {
        res.sendStatus(400);
    }
})

app.post('/api/carsapp', async (req, res) => {
    const newcar = req.body;
    try {
        await moduleAcess.addCar(newcar);
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(501).send(error);
    }
})