const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");


router.post("/mens", async(req,res) => {
    try{
        const addingMensRecord = new MensRanking(req.body)
        console.log(req.body);
        const insertmens = await addingMensRecord.save();
        res.status(201).send(insertmens);
    }catch{
        res.status(400).send(e);
    }
})

router.get("/mens", async(req,res) => {
    try{
        
        const getdata = await MensRanking.find({}).sort({"ranking":1});
        res.send(getdata);
    }catch{
        res.status(400).send(e);
    }
})

router.get("/mens/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const getdatas = await MensRanking.findById({_id});
        res.send(getdatas);
    }catch{
        res.status(400).send(e);
    }
})

router.patch("/mens/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const getdatas = await MensRanking.findByIdAndUpdate(_id, req.body, {new: true});
        res.send(getdatas);
    }catch{
        res.status(500).send(e);
    }
})

router.delete("/mens/:id", async(req,res) => {
    try{
        const getdatas = await MensRanking.findByIdAndDelete(req.params.id);
        res.send(getdatas);
    }catch{
        res.status(400).send(e);
    }
})

router.get("/", async(req,res) => {
    res.send("Hello from the Sujatro");
})

module.exports = router;