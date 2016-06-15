var Iconeezin = require("iconeezin");

/**
 * Factory & Initializer of Iconeezin.API.AudioFile
 */
var factory_Iconeezin_API_AudioFile = {
	props: 1,
	create: function() {
		return Object.create(Iconeezin.API.AudioFile.prototype);
	},
	init: function(inst, props, pagesize, offset) {
		Iconeezin.API.AudioFile.call(inst,
			props[offset+pagesize*0]);
	}
}

/**
 * Factory & Initializer of Iconeezin.API.ExperimentFile
 */
var factory_Iconeezin_API_ExperimentFile = {
	props: 2,
	create: function() {
		return Object.create(Iconeezin.API.ExperimentFile.prototype);
	},
	init: function(inst, props, pagesize, offset) {
		Iconeezin.API.ExperimentFile.call(inst,
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
						return factory_Iconeezin_API_AudioFile;
				} else {
					if (id === 33)
						return factory_Iconeezin_API_ExperimentFile;
				}
			}
		}
};
