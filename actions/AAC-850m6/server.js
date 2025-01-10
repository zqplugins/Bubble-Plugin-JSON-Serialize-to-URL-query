async function(properties, context) {

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);
    
var myObject = JSON.parse(properties.json_body);
var recursiveEncoded = $.param( myObject,properties.traditional );
var recursiveDecoded = decodeURIComponent( $.param( myObject,properties.traditional ) );
    
 return result = {
     result_url_encoded: recursiveEncoded,
     result_url_decoded: recursiveDecoded
 }
}