"use strict";

const randomstring = require("randomstring");
const fs = require("fs");

const path = __dirname + '/../../';

const mimes = {};
mimes['image/jpeg'] = {ext: 'jpg', type: 'image'};
mimes['image/png'] = {ext: 'png', type: 'image'};
mimes['video/mp4'] = {ext: 'mp4', type: 'video'};

module.exports = {
    save: function(mime, data) {
    	let type = mimes[mime];
    	if(!type) {
    		return null;
    	}

		var base64Data = data.replace(/^data:image\/png;base64,/, "");
		var p = path + randomstring(10) + '.' + type.ext;

		fs.writeFile(p, base64Data, 'base64', function(err) {
		  if(err) {
		  	return err;
		  } else {
		  	return p;
		  }
		});
    },

    type: function(mime) {
    	return mimes[mime].type;
    }
};