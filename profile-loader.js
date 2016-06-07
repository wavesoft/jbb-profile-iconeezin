"use strict";
/**
 * THREE Bundles - Binary Encoder
 * Copyright (C) 2015 Ioannis Charalampidis <ioannis.charalampidis@cern.ch>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * @author Ioannis Charalampidis / https://github.com/wavesoft
 */

var path 			= require('path');
var IconeezinAPI 	= require('iconeezin/api');

/**
 * Export loader specifications
 */
module.exports = {

	/**
	 * Initialize profile loader
	 */
	'initialize': function( cb, specs ) {

		// Keep bundle name from specs
		this.name = specs['name'];

		// Fire callback
		if (cb) cb();

	},

	/**
	 * Load object(s) from the specified filename and put them in the database record under the given name
	 */
	'load': function( loadClass, loadSpecs, name, callback ) {
		var objects = {};

		if (loadClass === "IconeezinAPI.ExperimentFile") {

			if (typeof loadSpecs === "string") {
				objects[name] = new IconeezinAPI.ExperimentFile( loadSpecs, this.name );
				callback( null, objects );
				return true;
			}

		} else if (loadClass === "IconeezinAPI.AudioFile") {

			if (typeof loadSpecs === "string") {
				objects[name] = new IconeezinAPI.AudioFile( loadSpecs );
				callback( null, objects );
				return true;
			}

		}

		return false;
	}

};
