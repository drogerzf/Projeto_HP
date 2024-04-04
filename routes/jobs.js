const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/test', (req, res) => {
    res.send("teste /test");
});

//add job via post
router.post('/add', (req, res) => {
    let{TITULO, SALARY, COMPANY, EMAIL, NEW} = req.body;

    //insert
    Job.create({
        TITULO,
        SALARY,
        COMPANY,
        EMAIL,
        NEW
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log('atenção, erro', err));
});

module.exports = router