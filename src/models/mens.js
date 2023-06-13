const express = require("express");
const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trume:true
    },
    dob:{
        type:Date,
        required:true,
        trume:true
    },
    country:{
        type:String,
        required:true,
        trume:true
    },
    score:{
        type:Number,
        required:true,
        trume:true
    },
    event:{
        type:String,
        default:"100m"
    },
})

const MensRanking = new mongoose.model("MensRanking", menSchema);

module.exports = MensRanking;