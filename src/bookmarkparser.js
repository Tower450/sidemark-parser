var fs = require('fs')
var parse = require("bookmarks-parser");

var content

fs.readFile('./src/netscape/test.html', function read(err, data) {
  if (err) {
      throw err;
  }
  content = data.toString();
  // console.log(content); 
  parse(content, function(err, res) {
    if(err) {
        console.log(err);
    }
    console.log(res.parser);
    console.log(res.bookmarks[0].children[0]);
  });

});
