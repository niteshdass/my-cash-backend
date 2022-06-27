const _ = require('lodash');
const Loan = require('../models/loan');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = (req, res) => {
    const loan = new Loan(req.body);
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
    Loan.find()
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
    let user_id = req.params?.userId;
    Loan.find({ user_id })
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
    Loan.remove({ _id }).exec((err, data) => {
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

