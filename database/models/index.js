
module.exports = function(mongoose){
	require("./collage")(mongoose);
	require("./user")(mongoose);
}