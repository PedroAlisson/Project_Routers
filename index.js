const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/calculo', (req, res) =>{
    res.render('calculo')
})

app.post('/calculo', (request, res) =>{
    const {number1, number2} = request.body
    const calculo = number1 * number2
    res.render('resultado',{
        calculo
    })
})

app.listen(3000, () => console.log('start'))