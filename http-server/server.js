const express = require('express')
const cors = require('cors')

const port = 3000
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World from Express!')
})

app.get('/api/heroes', (req, res) => {
    const heroes = [
        {id: 1, name: 'Hero-1'},
        {id: 2, name: 'Hero-2'},
        {id: 3, name: 'Hero-3'},
        {id: 4, name: 'Hero-4'},
        {id: 5, name: 'Hero-5'}
    ];

    res.send(heroes)
})

app.listen(port, (err) => {
    if (err) {
        return console.log('Some issue', err)
    }

    console.log(`server is listening on ${port}`)
})