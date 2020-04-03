const express = require('express');

const mongoose = require('mongoose');

require('dotenv').config();



const body_parser = require('body-parser');

const material_controller = require('./material_controller');

const port = process.env.PORT || 8080;

const app = express();

// req.body.name
app.use(body_parser.json()); 
// material/id
app.use(body_parser.urlencoded({extended:true}));

app.use( (req, res, next) =>{
    console.log(req.method, ' ', req.path);
    next();
    // GET /api/materials

});

// ---------------------------
// Restful API
//---------------------------

const material_model = require('./material_model');

// Create
// add new material to database
app.post("/api/material", material_controller.api_post_material);
    console.log("api_post_material");

// READ
app.get("/api/materials", material_controller.api_get_materials);

// UPDATE

// DELETE
app.delete("/api/material/:id", material_controller.api_delete_material);

// ---------------------------
// Database connection
//---------------------------

const database_uri = "mongodb+srv://admin:"+process.env.DB_PASS+"@cluster0-gbsqa.mongodb.net/materialdb?retryWrites=true&w=majority"

mongoose.connect(database_uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false  
}).then(() =>{

    app.listen(port);
    console.log("database connected");
}).catch(err =>{
    console.log(err);
});

