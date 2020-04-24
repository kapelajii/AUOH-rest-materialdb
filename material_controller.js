const material_model = require('./material_model');



// HELPPER FUNCTIONS

// Material data
const material_data = (req) => {
    let data ={
        name: req.body.name,
        min_density: req.body.min_density,
        max_density: req.body.max_density,
        min_strength: req.body.min_strength,
        max_strength: req.body.max_strength,

        min_strength_density: req.body.min_strength / req.body.max_density,
        max_strength_density: req.body.max_strength / req.body.min_density
    };
    return data;
};

// CREATE
const api_post_material = (req, res, next) => {

    // get material data 
    let data = material_data(req);
    let new_material = material_model(data);

    new_material.save().then(()=> {
        console.log(new_material);
        res.send(JSON.stringify(new_material));
    }).catch(err =>{
        res.status(500);
        console.log(err);
    })
};

// READ
const api_get_materials = (req, res, next) => {
    // get all objects from database
    material_model.find({})
    // get only data not methods
    .lean()
    .then(materials => {
        res.send(JSON.stringify(materials));

    }).catch(err =>{
        res.status(500);
        console.log(err);
    });    
};

// UPDATE
// PUT api/put/5e8773c1a97d8a5e90c94cd8
const api_put_material = (req, res, next ) => {
    let id = req.params.id;
    let data = material_data(req);

    // property new return the modified document rather than the original. defaults to false 
    material_model.findByIdAndUpdate(id, data, {new: true}).then( (material) => {
        res.send(material);

    }).catch(err =>{
        res.status(500);
        console.log(err);  
    });
};

// DELETE
// api/material/5e8773c1a97d8a5e90c94cd8

const api_delete_material = (req, res, next) => {

    let id = req.params.id;
    let name = req.params.name;
    
    material_model.findByIdAndRemove(id).then(()=> {
        res.send();

    }).catch(err =>{
        res.status(500);
        res.send(err.errmsg);
        console.log(err);
    });
};

// Exports
module.exports.api_get_materials = api_get_materials;
module.exports.api_post_material = api_post_material;
module.exports.api_put_material = api_put_material;
module.exports.api_delete_material = api_delete_material;
