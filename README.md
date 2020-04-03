# AUOH-rest-materialdb

Engineering materials database REST-API

work in progress....

## material structure and API-commands

```
datamodel
material
– id
– name [string]
– min_density [number]
– max_density [number]
– min_strength [number]
– max_strength [number]
– min_strength_density [number]
– max_strength_density [number]

----------------------------------

// Add new material to databse
POST /api/material

// Get all materials informations in Json-format
GET /api/materials

// Get single material information
GET /api/material/:id

// Replace current material with new one
PUT /api/material/:id

// Delete single material from database
DELETE /api/materials/:id

```

## How to use:

```
npm install
npm start
```
