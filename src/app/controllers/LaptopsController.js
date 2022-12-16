const Laptops = require('../models/Laptops');
const mongooseUtil = require('../../util/mongoose');

class NewsController {
    // [GET] /news
    index(req, res) {
        // Callback style
        // Laptops.find({}, function (err, laptops) {
        //     if (!err) {
        //         laptops: combineMutipleMongooseToObject(laptops)
        //     } else {
        //         next(err);
        //         res.status(400).json({ error: 'message' });
        //     }
        // });

        // Promise style
        Laptops.find({})
            .then((laptops) => {
                res.render('laptops', {
                    laptops:
                        mongooseUtil.combineMutipleMongooseToObject(laptops),
                });
            })
            .catch((err) => next(err));
    }

    // [GET] /news/:slug
    show(req, res, next) {
        Laptops.findOne({ slug: req.params.slug })
            .then((laptop) => {
                res.render('laptops/show', {
                    laptop: mongooseUtil.combineMongooseToObject(laptop),
                });
            })
            .catch((err) => next(err));
    }

    // [GET] laptop/create
    create(req, res, next) {
        res.render('laptops/create');
    }

    // [POST] laptop/store
    store(req, res, next) {
        const laptop = new Laptops(req.body);
        laptop
            .save()
            .then(() => res.redirect('/laptops'))
            .catch((err) => {});
    }

    // [GET] maptops/:id/edit
    edit(req, res, next) {
        console.log(req.params.id);
        Laptops.findById(req.params.id)
            .then((laptop) =>
                res.render('laptops/edit', {
                    laptop: mongooseUtil.combineMongooseToObject(laptop),
                }),
            )
            .catch((err) => next(err));
    }

    // [POST] /laptop/:id
    update(req, res, next) {
        Laptops.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/laptops'))
            .catch((err) => next(err));
    }

    // [DELETE] /laptop/:id
    delete(req, res, next) {
        Laptops.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch((err) => next(err));
    }
}

module.exports = new NewsController();
