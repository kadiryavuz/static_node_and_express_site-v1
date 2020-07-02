const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data.json');

const app = express();
app.set("view engine", "pug");
app.use('/static', express.static('./public'));

// index route handling
app.get('/', (req, res) => {
    res.render('index', { projects: data.projects });
});

// about route handling
app.get('/about', (req, res) => {
    res.render('about');
})

// dynamic project route handling
app.get('/project/:id', (req, res) => {
    const { id } = req.params;
    const projectVal = data.projects.find(s => s["id"] === Number(id));
    res.render('project', { project: projectVal });
})


// error handling - placed after all routes handling above
// if there is unhandled route request exists, then custom error template will be displayed to the user
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
})

app.listen(3000, () => {
    console.log("the application is ruuning on port: 3000");
});

