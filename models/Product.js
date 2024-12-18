// ./models/Products.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    price_in_usd: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative']
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
        trim:true
    },
    stock_quantity: {
        type: Number,
        required: [true, 'Product quantity is required'],
        min: [0, 'Quantity cannot be negative']
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        trim: true
    },
    discount: {
        type: String,
        required: [true, 'Product discount is required'],
        trim: true
    },
    imgSrc: {
        type: String,
        required: [true, 'Product image is required'],
        trim: true
    }

}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = productSchema;