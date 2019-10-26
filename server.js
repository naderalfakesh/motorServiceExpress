const express = require('express')
var cors = require('cors')
let dburl = "mongodb+srv://dalelektrik:Nad1715$mongodb@cluster0-knylu.mongodb.net/test?retryWrites=true&w=majority"
 dburl = "mongodb://localhost:27017/test"
const app = express()
const port = process.env.PORT || 5000
app.use(express.json());
app.use(cors()); 

const mongoose= require('mongoose')
mongoose
  .connect(dburl, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//routers"
app.use('/invoice', require('./routes/api/invoice'));
app.use('/offer', require('./routes/api/invoice')); // only for delete requests 
app.use('/purchase', require('./routes/api/invoice')); // only for delete requests 
app.use('/company', require('./routes/api/company'));
app.use('/contact', require('./routes/api/contact'));
app.use('/product', require('./routes/api/product'));
app.use('/rewind', require('./routes/api/rewind'));
app.use('/lsd', require('./routes/api/lsd'));
app.use('/nameplate', require('./routes/api/nameplate'));



app.listen(port , () => console.log(`Listening to port: ${port}`))

