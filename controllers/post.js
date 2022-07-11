const _ = require('lodash');
const Target = require('../models/target');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = async (req, res) => {
    let size = Object.keys(req.body).length;
    const { month, year, user_id} = req.body;
    if (size > 3 && month && year && user_id) {
        Target.find({ month, year, user_id })
            .exec((err, budgets) => {
                if (budgets?.length < 1) {
                    const budget = new Target(req.body);
                    budget.save((err, user) => {
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
                } else {
                    Target.findOneAndUpdate({
                        month: req.body.month
                    }, { target_ammount: req.body.target_ammount }, { upsert: true }, function (err, doc) {
                        if (err) return res.send(500, { error: err });
                        return res.send('Succesfully saved.');
                    });
                }

            });
    } else {
        return res.json({
            message: 'All field required'
        });
    }
};

exports.list = (req, res) => {
    Target.find()
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
};

exports.getCurrentMonthTargetByUser = (req, res) => {
    let month = req.params?.month;
    let year = req.params?.year;
    let user_id = req.params?.user_id;
    Target.find({ month, year, user_id })
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
};
exports.getCurrentMonthTarget = (req, res) => {
    let user_id = req.params?.user_id;
    if(user_id) {
        Target.find({ user_id })
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
    } else {
        return res.status(400).json({
            error: 'Products not found'
        });
    }
};

exports.remove = (req, res) => {
    let _id = req.params?.removeId;
    Target.remove({ _id }).exec((err, data) => {
        if (data.length >= 1) {
            return res.status(400).json({
                message: `Sorry. You cant delete`
            });
        }
        res.json({
            message: 'Budget deleted'
        })
    });
};

