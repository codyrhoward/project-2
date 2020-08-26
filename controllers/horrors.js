const express = require('express');
const router = express.Router();
const Horror = require('../models/horrors.js');

// add routes
// Index
router.get('/', (req, res) => {
    // Use Dramas model to get all Horrors
    Horror.find({}, (error, allHorrors) => {
        res.render('horrors/Index', {
            horrors: allHorrors
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('horrors/New');
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Horror.findByIdAndRemove(req.params.id, (err, horror) => {
        res.redirect('/horrors');
    });
});

// Update
router.put('/:id', (req, res) => {
    req.body.watched = req.body.watched === "on" ? true : false;

    // Update the horror document using our model
    Horror.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) => {
        res.redirect('/horrors');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.watched === "on") {
        req.body.watched = true;
    } else {
        req.body.watched = false;
    }
    // Use Model to create Horror Document
    Horror.create(req.body, (error, createdHorror) => {
       
        res.redirect('/horrors');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Horror.findById(req.params.id, (err, foundHorror) => {
        // render the edit view and pass it the found horror
        res.render('horrors/Edit', {
            horror: foundHorror
        })
    });
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Horror.findById(req.params.id, (error, foundHorror) => {
        // render the Show route and pass it the foundHorror
        res.render('horrors/Show', {
            horror: foundHorror
        });
    });
});


// export router
module.exports = router;
