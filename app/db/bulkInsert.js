var fs = require('fs'),
    async = require('async'),
    csv = require('csv');
const attraction = require('../../models/attraction');
 
var input = fs.createReadStream("./attractions.csv");
var parser = csv.parse({
  columns: true,
  relax: true
});
 
var inserter = async.cargo(function(tasks, inserterCallback) {
    attraction.bulkCreate(tasks).then(function() {
        inserterCallback();
      }
    );
  },
  1000
);
 
parser.on('readable', function () {
  while(line = parser.read()) {
    inserter.push(line);
  }
});
 
parser.on('end', function (count) {
  inserter.drain = function() {
    doneLoadingCallback();
  }
});
 
input.pipe(parser);