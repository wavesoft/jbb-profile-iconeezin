var BinaryEncoder = require('jbb/encoder');
var IconzeenAPI = require('iconeezin/api');

/**
 * Property getter IconzeenAPI.AudioFile
 */
function getter_IconzeenAPI_AudioFile(inst) {
	return [
		new BinaryEncoder.FileResource( inst.url )];
}

/**
 * Property getter IconzeenAPI.ExperimentFile
 */
function getter_IconzeenAPI_ExperimentFile(inst) {
	return [
		new BinaryEncoder.FileResource( inst.url ),
		inst.className];
}


module.exports = {
	id: 32,
	size: 2,
	frequent: 0,
	encode: function( inst ) {
			if (inst instanceof IconzeenAPI.AudioFile) {
				return [32, getter_IconzeenAPI_AudioFile];
			} else if (inst instanceof IconzeenAPI.ExperimentFile) {
				return [33, getter_IconzeenAPI_ExperimentFile];
			}
		}
};
