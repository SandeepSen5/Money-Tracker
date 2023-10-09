const express = require('express');
const Transcaction = require('../models/transactions');

exports.addTranscation = async (req, res) => {
    const { id, name, description, datetime, price } = req.body;
    if (id) {
        const rslt = await Transcaction.updateOne({ _id: id }, { $set: { name: name, description: description, datetime: datetime, price: price } });
        res.status(200).json(rslt);
    } else {
        const transcation = await Transcaction.create({ name, description, datetime, price });
        res.status(200).json(transcation);
    }
}

exports.totalAmount = async (req, res) => {
    const total = await Transcaction.aggregate([
        {
            $group: {
                _id: null,
                totalAmount: { $sum: "$price" }
            }
        }
    ])
    res.status(200).json(total);
}

exports.inputData = async (req, res) => {
    const rslt = await Transcaction.find();
    console.log(rslt)
    res.status(200).json(rslt);
}

exports.deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Transcaction.deleteOne({ _id: id });

        if (result.deletedCount === 1) {
            res.json({ success: true, message: 'Transaction deleted successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Transaction not found' });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, message: 'An error occurred while deleting the transaction' });
    }
};




