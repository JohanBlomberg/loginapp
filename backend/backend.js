const express = require ('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express();
const dbURL = 'mongodb+srv://LoginApp:7UAe3wKQjURLP67I@cluster0.0ieve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3002;
const Model = require ('./model')
const postsRoute = require('./routes/users');

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(morgan('dev'))

app.post('/users', (req, res) => {
    console.log('Vad du vill')
    console.log(req.body)
    const user = new Model(req.body)

    user.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})


app.get("/add-blog", (req, res) => {
    const blog = new Model({
        name: 'Johan Blomberg',
        email: 'test@test.com',
        password: 'superman123',
        country: 'Sweden'
    });

    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((error) => {
        console.log(error)
    })
})


    mongoose.connect(dbURL,
      { useNewUrlParser: true, useUnifiedTopology: true}, () => app.listen(PORT), console.log(`App is listening to ${PORT}`));