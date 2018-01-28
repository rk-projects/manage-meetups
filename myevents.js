var assert = require('assert');

assert(process.env.MEETUP_KEY, 'MEETUP_KEY variable isn\'t set on enviroment (use \'set \"MEETUP_KEY=key\"\' on Windows)');

var meetup = require('meetup-api')({
	key: process.env.MEETUP_KEY
});

meetup.getEvents({
	group_urlname: 'fosscafe'
}, function(error, events) {
	if (error) {
		console.log(error);
	} else {
		console.log(events);
	}
});
