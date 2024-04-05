const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
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

//handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname,'public')));

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
    res.render('index');
}); 

//jobs routes
app.use('/jobs', jobsRouter);
