var BinaryEncoder = require('jbb/encoder');
var Iconeezin = Iconeezin || {}; Iconeezin["API"] = require("iconeezin/api");

/**
 * Property getter Iconeezin.API.AudioFile
 */
function getter_Iconeezin_API_AudioFile(inst) {
	return [
		new BinaryEncoder.FileResource( inst.url )];
}

/**
 * Property getter Iconeezin.API.ExperimentFile
 */
function getter_Iconeezin_API_ExperimentFile(inst) {
	return [
		new BinaryEncoder.FileResource( inst.url ),
		inst.className];
}


module.exports = {
	id: 32,
	size: 2,
	frequent: 0,
	encode: function( inst ) {
			if (inst instanceof Iconeezin.API.AudioFile) {
				return [32, getter_Iconeezin_API_AudioFile];
			} else if (inst instanceof Iconeezin.API.ExperimentFile) {
				return [33, getter_Iconeezin_API_ExperimentFile];
			}
		}
};
