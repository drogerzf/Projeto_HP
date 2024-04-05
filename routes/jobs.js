const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

//rota teste
router.get('/job', (req, res) => {
    res.send('Esta é a rota *teste* para /job');
  });

//add job via post
router.post('/add', (req, res) => {
    let{TITLE, SALARY, COMPANY, EMAIL, NEW} = req.body;

    //insert
    Job.create({
        TITLE,
        SALARY,
        COMPANY,
        EMAIL,
        NEW
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log('atenção, erro', err));
});

module.exports = router;