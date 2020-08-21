const express = require('express')
const router = express.Router()
const Drama = require("../models/dramas.js")

//Index
router.get("/", (req, res)=>{
    Drama.find({}, (error, allDramas)=>{
        res.render("dramas/Index", {
            dramas: allDramas
        })
    })
})
module.exports = router

//New
//GET '/dramas/new
router.get('/new', (req, res) => {
    res.render('dramas/New');
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Drama.findByIdAndRemove(req.params.id, (err, drama) => {
        res.redirect('/dramas');
    });
});

// Update
router.put('/:id', (req, res) => {
    req.body.isGreen = req.body.isGreen === "on" ? true : false;

    // Update the drama document using our model
    Drama.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        console.log(updatedModel)
        res.redirect('/dramas');
    });
});

//Create
// POST '/dramas/'
//CREATE--- POST /dramas/
router.post('/', (req, res) => {
    if (req.body.isGreen === "on") {
        req.body.isGreen = true;
    } else {
        req.body.isGreen = false;
    }
    // Use Model to create drama Document
    Drama.create(req.body, (error, createdDrama) => {
        // Once created - respond to client
        res.redirect('/dramas');
    });
  });

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Drama.findById(req.params.id, (err, foundDrama) => {
        // render the edit view and pass it the found drama
        res.render('dramas/Edit', {
            drama: foundDrama
        })
    });
});

  // Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Drama.findById(req.params.id, (error, foundDrama) => {
        // render the Show route and pass it the foundDrama
        res.render('dramas/Show', {
            drama: foundDrama
        });
    });
});
