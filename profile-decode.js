var IconzeenAPI = require('iconeezin/api');

/**
 * Factory & Initializer of IconzeenAPI.AudioFile
 */
var factory_IconzeenAPI_AudioFile = {
	props: 1,
	create: function() {
		return Object.create(IconzeenAPI.AudioFile.prototype);
	},
	init: function(inst, props, pagesize, offset) {
		IconzeenAPI.AudioFile.call(inst,
			props[offset+pagesize*0]);
	}
}

/**
 * Factory & Initializer of IconzeenAPI.ExperimentFile
 */
var factory_IconzeenAPI_ExperimentFile = {
	props: 2,
	create: function() {
		return Object.create(IconzeenAPI.ExperimentFile.prototype);
	},
	init: function(inst, props, pagesize, offset) {
		IconzeenAPI.ExperimentFile.call(inst,
			props[offset+pagesize*0],
			props[offset+pagesize*1]);
	}
}

module.exports = {
	id: 32,
	size: 2,
	frequent: 0,
	decode: function( id ) {
			if (id < 32) {
				/* No items */
			} else {
				if (id < 33) {
					if (id === 32)
						return factory_IconzeenAPI_AudioFile;
				} else {
					if (id === 33)
						return factory_IconzeenAPI_ExperimentFile;
				}
			}
		}
};
