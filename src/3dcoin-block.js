const data = require('3dcore-lib');

module.exports = function(hex) {
    var block = data.Block(hex);
    var json = block.toJSON();
    return json;
}
