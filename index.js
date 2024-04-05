const express = require('express');
const app = express();
const db = require('./connection');
const bodyParser = require('body-parser');
const jobsRouter = require('./routes/jobs');
const Job = require('./models/Job');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`o express está na porta ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({extended: false}));

//db connection
db
    .authenticate()
    .then(() => {
        console.log("conectou ao banco com sucesso");
    })
    .catch(err => {
        console.log('ocorreu um erro de conexao', err);
    });

//routes    
app.get("/", (req, res) => {
    res.send(`está funcionando na porta ~routes~ ${PORT}`)
}); 

//jobs routes
app.use('/jobs', jobsRouter);
