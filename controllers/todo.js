const _ = require('lodash');
const Todo = require('../models/todo');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = async (req, res)  => {
    Todo.find({ _id: req.body._id })
    .exec((err, budgets) => {
        if (budgets?.length < 1) {
            const budget = new Todo(req.body);
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
            Todo.findOneAndUpdate({
                _id: req.body._id
            }, { status: req.body.status} , {upsert: true}, function(err, doc) {
                if (err) return res.send(500, {error: err});
                return res.send('Succesfully saved.');
            });
        }
        
    });
};
exports.list = (req, res) => {
    Todo.find()
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
    Todo.find({ user_id })
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
    Todo.remove({ _id }).exec((err, data) => {
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

