const express = require ('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express();
const dbURL = 'mongodb+srv://LoginApp:7UAe3wKQjURLP67I@cluster0.0ieve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3002;
const Model = require ('./model')

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'))

app.get("/add-blog", (req, res) => {
    const blog = new Model({
        name: 'Johan Blomberg 2',
        email: 'test@test.com',
        password: 'test123',
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

app.get("/Api", (req, res) => {
   res.json ({message: 'Hello from the server!'})
})


    mongoose.connect(dbURL,
      { useNewUrlParser: true, useUnifiedTopology: true}, () => app.listen(PORT), console.log(`App is listening to ${PORT}`));