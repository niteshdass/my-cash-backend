const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Budget = require('../models/budget');
const { errorHandler } = require('../helpers/dbErrorHandler');
const { size } = require('lodash');

exports.create = (req, res) => {
    let data = req.body;
    const d = new Date();
    let month = d.getMonth();
    let year = d.getFullYear();
    data.year = year;
    data.month = month + 1;
    let size = Object.keys(data).length;
    if (size > 5) {
        const budget = new Budget(data);
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
        return res.json({
            message: "All data is required"
        });
    }
};

exports.list = (req, res) => {
    let order = req.query.order === 'asc' ? -1 : 1;
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    // let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    Budget.find()
        .sort([[sortBy, order]])
        .exec((err, budgets) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(budgets);
        });
};

exports.listById = (req, res) => {
    let user_id = req.params?.userId;
    let order = req.query.order === 'asc' ? -1 : 1;
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    // let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    Budget.find({user_id})
        .sort([[sortBy, order]])
        .exec((err, budgets) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(budgets);
        });
};

exports.budgetById = (req, res) => {
    let user_id = req.params?.userId;
    let filterBy = req.params?.value;
    let field = req.params?.field;
    var obj = {};

    obj[field] = filterBy;
    obj.user_id = user_id;
  
    Budget.find(obj)
        .exec((err, budgets) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(budgets);
        });
};

exports.currentMonth = (req, res) => {
    let user_id = req.params?.userID;
    let month = req.params?.month;
    let year = req.params?.year;

    // let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    Budget.find({user_id, year, month})
        .exec((err, budgets) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(budgets);
        });
};


exports.remove = (req, res) => {
    let _id = req.params?.removeId;
    Budget.remove({ _id }).exec((err, data) => {
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

