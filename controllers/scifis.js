const express = require('express');
const router = express.Router();
const Scifi = require('../models/scifis');

// add routes
// Index
router.get('/', (req, res) => {
    // Use scifis model to get all Scifis
    Scifi.find({}, (error, allScifis) => {
        res.render('scifis/Index', {
            scifis: allScifis
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('scifis/New');
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Scifi.findByIdAndRemove(req.params.id, (err, scifi) => {
        res.redirect('/scifis');
    });
});

// Update
router.put('/:id', (req, res) => {
    req.body.watched = req.body.watched === "on" ? true : false;

    // Update the scifi document using our model
    Scifi.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) => {
        res.redirect('/scifis');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.watched === "on") {
        req.body.watched = true;
    } else {
        req.body.watched = false;
    }
    // Use Model to create Scifi Document
    Scifi.create(req.body, (error, createdScifi) => {
       
        res.redirect('/scifis');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Scifi.findById(req.params.id, (err, foundScifi) => {
        // render the edit view and pass it the found scifi
        res.render('scifis/Edit', {
            scifi: foundScifi
        })
    });
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Scifi.findById(req.params.id, (error, foundScifi) => {
        // render the Show route and pass it the foundScifi
        res.render('scifis/Show', {
            scifi: foundScifi
        });
    });
});


// export router
module.exports = router;
