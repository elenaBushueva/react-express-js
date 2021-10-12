const express = require('express');
const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send({
        tasks: [
            {
                task: 'create tasks',
                id: 1,
            },
            {
                task: 'create names',
                id: 2,
            }
        ]
    })
})

app.get('/names', (req, res) => {
    res.send({
        names: [
            {
                name: 'Elena',
                id: Math.random()
            },
            {
                name: 'Galina',
                id: Math.random()
            }
        ]
    })
})

app.listen(PORT, () => {
    console.log(`=== SERVER STARTED ===. PORT ${PORT} ===`)
})