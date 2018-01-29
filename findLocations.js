var assert = require('assert'),
	key = process.env.MEETUP_KEY;

assert(key, 'MEETUP_KEY variable isn\'t set on enviroment (use \'set \'MEETUP_KEY=key\'\' on Windows)');

var meetup = require('meetup-api')({
	key: key
});

meetup.findLocations({'query': 'córdoba'}, function(err, arr) {
	arr.forEach(function(loc) {
		console.log('Found', loc.name_string);
	});	
});