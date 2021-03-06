require('dotenv').config()

// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// constants
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `watchlist`;
// mongoose connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})

//Controller
const dramasController = require('./controllers/dramas.js');
app.use('/dramas', dramasController);

const scifisController = require('./controllers/scifis.js');
app.use('/scifis', scifisController);

const horrorsController = require('./controllers/horrors.js');
app.use('/horrors', horrorsController);


const comediesController = require('./controllers/comedies.js')
app.use('/comedies', comediesController)

app.get('/', (req, res)=>{
    res.render('static/Home')
  })

// listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});

//Default route
app.get('/', (req,res)=>{
    res.redirect('/home')
})
