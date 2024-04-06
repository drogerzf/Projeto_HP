const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

//rota teste
router.get('/teste', (req, res) => {
    res.send('Esta é a rota *teste* para /job');
  });

//detalhe da vaga
router.get('/view/:id', (req, res) => Job.findOne({ 
    where: {id: req.params.id}
}).then(job => {
  res.render('view', {
    job
  });
}).catch(err => console.log(err)));



//form da rota de envio
router.get('/add', (req, res) => {
    res.render('add');
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