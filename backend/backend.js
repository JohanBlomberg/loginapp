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
app.use(express.urlencoded({ extended: true}))
app.use(morgan('dev'))

app.post("/api/users", async (req, res) =>{
     const user = new Model(req.body)
    const isEmailAlreadyRegistered = await Model.exists({ email: req.body.email });
    

    if (isEmailAlreadyRegistered) {
        console.log("Email already in use")
        res.send({message: "This email is already in use"})
    } else {
        user.save()
        res.send({message: "You are now registerd"})
        console.log("user added to database")
    } 
});  

app.post('/api/login', async (req, res) => {
    console.log("request made")
    console.log(req.body)

    const userEmail = await Model.exists({ email: req.body.email });
    const userPassword = await Model.exists({ password: req.body.password });
    

    if (userEmail && userPassword) {
        console.log("User logged in")
        res.send({loggedIn: true})
    } else {
        console.log('Users doesnt match')
        res.send({message: "Not logged in"})
    } 
});  


    mongoose.connect(dbURL,
      { useNewUrlParser: true, useUnifiedTopology: true}, () => app.listen(PORT), console.log(`App is listening to ${PORT}`));