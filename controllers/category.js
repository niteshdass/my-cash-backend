const _ = require('lodash');
const Category = require('../models/category');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = async (req, res)  => {
    const loan = new Category(req.body);
    loan.save((err, user) => {
        if (err) {
            return res.status(400).json({
                // error: errorHandler(err)
                error: err
            });
        }
        return res.json({
            user
        });
    });
};
exports.list = (req, res) => {
    Category.find()
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
};

exports.listById = (req, res) => {
    let user_id = req.params?.userID;
    Category.find({ user_id })
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
};

exports.remove = (req, res) => {
    let _id = req.params?.removeId;
    Category.remove({ _id }).exec((err, data) => {
        if (data.length >= 1) {
            return res.status(400).json({
                message: `Sorry. You cant delete`
            });
        }
        res.json({
            message: 'Laon deleted'
        })
    });
};

