const express = require('express');
const router = express.Router();
const Comedy = require('../models/comedies');

// add routes
// Index
router.get('/', (req, res) => {
    // Use Comedies model to get all Comedies
    Comedy.find({}, (error, allComedies) => {
        res.render('comedies/Index', {
            comedies: allComedies
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('comedies/New');
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Comedy.findByIdAndRemove(req.params.id, (err, comedy) => {
        res.redirect('/comedies');
    });
});

// Update
router.put('/:id', (req, res) => {
    req.body.watched = req.body.watched === "on" ? true : false;

    // Update the comedy document using our model
    Comedy.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) => {
        res.redirect('/comedies');
    });
});

// Create
router.post('/', (req, res) => {
    if (req.body.watched === "on") {
        req.body.watched = true;
    } else {
        req.body.watched = false;
    }
    // Use Model to create Comedy Document
    Comedy.create(req.body, (error, createdComedy) => {
       
        res.redirect('/comedies');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Comedy.findById(req.params.id, (err, foundComedy) => {
        // render the edit view and pass it the found comedy
        res.render('comedies/Edit', {
            comedy: foundComedy
        })
    });
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Comedy.findById(req.params.id, (error, foundComedy) => {
        // render the Show route and pass it the foundComedy
        res.render('comedies/Show', {
            comedy: foundComedy
        });
    });
});


// export router
module.exports = router;
