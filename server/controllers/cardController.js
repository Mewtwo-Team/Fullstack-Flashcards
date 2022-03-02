const Cards = require('../model/cardModel')

const cardController = {};

cardController.addCard = (req, res, next) => {
    console.log(req.body);
 
    const addCardQuery = 'INSERT INTO cards (deck, card_front, card_back, current_score) VALUES ($1, $2, $3, $4);' 

    Cards.query(addCardQuery, ['deck', 'card_front', 'card_back', 'current_score'])
        .then(response => {
            console.log(response);
            res.locals.cards = response;
            next();
        })
        .catch(err => {
            console.log('hello world');
            // return next({
            //     log: 'Express error handler caught in addCard middleware error',
            //     status: 500,
            //     message: { err: 'Cannot add card' }
            // })
            return next();
        })
}
cardController.getCards = (req, res, next) => {
    const queryString = 'SELECT * FROM cards;';
    Cards.query(queryString)
        .then((result) => {
            res.locals.cards = result.rows;
            return next();
        })
        .catch((err) => {
            console.log(err);
            return next({
                log: "cardController.getCards: ERROR: can't get data back from database",
                status: 500,
                message: {
                    err: 'Error occurred in cardController.getCards. Check server logs for more details.'
                },
            });
        });
};

module.exports = cardController;