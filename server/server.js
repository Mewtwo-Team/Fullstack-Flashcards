const express = require("express");
const path = require('path'); 
const PORT = process.env.PORT || 3001;

const app = express();

const cardController = require('./controllers/cardController');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// for serving css or additional js files 
// app.use(express.static(path.join(__dirname, '../assets/')));

app.get('/api', cardController.getCards, (req, res) => {
    res.status(200).json(res.locals.cards);
});

app.post('/cards', cardController.addCard, (req, res) => {
    res.status(200).json(res.locals.cards);
});

//for updating the difficulty score of the card 
// app.patch('/cards', (req, res) => { 
// })


app.get('/', function (req, res) { 
    res.sendFile(path.join(__dirname, './index.html'));
  });

app.use('*', (req, res) => res.status(404).type('txt').send('404 Not Found'));

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occured' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

module.exports = app;