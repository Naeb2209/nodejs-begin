const newsRouter = require('./news');
const laptopsRouter = require('./laptops');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/laptops', laptopsRouter);
    app.get('/', (req, res) => {
        res.render('home');
    });
}

module.exports = route;
