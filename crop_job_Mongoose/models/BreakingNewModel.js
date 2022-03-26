 "use strict"
 const mongoose = require("mongoose");

 const { Schema } = mongoose;

 const BreakingModelSchema = new Schema({
    title:{type:"string"},
    link: {type:"string"},
 }, {timestamps: {createdAt:true, updatedAt:true}}
 );

 module.exports = mongoose.model('BreakingNew', BreakingModelSchema);