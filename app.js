const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

const body_parser = require('body-parser');

// req.body.name
app.use(body_parser.json()); 
// material/id
app.use(body_parser.urlencoded({extended:true}));

app.use( (req, res, next) =>{
    console.log(req.method, ' ', req.path);
    // GET /api/materials

});

app.listen(port);