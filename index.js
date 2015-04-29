'use strict';

var fs = require('fs');
var path = require('path');
var shp2stl = require('shp2stl');

var buildings = path.join(__dirname, 'data', 'buildings.shp');
var stlModel = path.join(__dirname, 'stl', 'lower-m-buildings.stl');

console.log('Starting');
console.log(Date.now());

shp2stl.shp2stl(buildings, {
    width: 100,
    height: 10,
    extraBaseHeight: 1,
    extrudeBy: 'height',
    simplification: .5,
    binary: true,
    cutoutHoles: false,
    verbose: true,
    extrusionMode: 'straight'
  },
  function(err, stl) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    console.log('Writting STL file');
    console.log(Date.now());

    fs.writeFile(stlModel, stl, function(err) {
      if (err) {
        console.log(err);
        process.exit(1);
      }

      console.log('Completed');
      console.log(Date.now());
    });
  }
);
