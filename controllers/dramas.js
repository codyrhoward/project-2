const express = require('express');
const router = express.Router();
const Drama = require('../models/dramas');

// add routes
// Index
router.get('/', (req, res) => {
    // Use Dramas model to get all Dramas
    Drama.find({}, (error, allDramas) => {
        res.render('dramas/Index', {
            dramas: allDramas
        })
    });

});

// New
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
    req.body.watched = req.body.watched === "on" ? true : false;

    // Update the drama document using our model
    Drama.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) => {
        res.redirect('/dramas');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.watched === "on") {
        req.body.watched = true;
    } else {
        req.body.watched = false;
    }
    // Use Model to create Drama Document
    Drama.create(req.body, (error, createdDrama) => {
       
        res.redirect('/dramas');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Drama.findById(req.params.id, (err, foundDrama) => {
        // render the edit view and pass it the found drama
        res.render('drama/Edit', {
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


// export router
module.exports = router;
