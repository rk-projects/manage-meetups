var request = require('request');
var listofEventIDs = []
request('https://api.meetup.com/find/upcoming_events?key=31662917176f1457822391934795268&group_url_name=fosscafe&sign=true',function(error,response,body) {
	if(!error && response.statusCode == 200)
	{
		var infoFetched4Events = JSON.parse(body);
		
		//The following line gets the details of all the upcoming events of fosscafe
		for (var i = 0; i < infoFetched4Events.events.length; i++) {
			if(infoFetched4Events.events[i].group.name=="fosscafe")
			{
				//console.log(infoFetched4Events.events[i]);
				
				//A list of IDs of upcoming events
				listofEventIDs.push(infoFetched4Events.events[i].id);
			}
		}

		for (var j = 0; j < listofEventIDs.length;j++) {
			console.log(listofEventIDs[j]);

			request('https://api.meetup.com/fosscafe/events/'+listofEventIDs[j]+'/comments?key=31662917176f1457822391934795268&group_url_name=fosscafe&sign=true',function(error,response,bodyComments){
			if(!error && response.statusCode == 200)
			{
				console.log(bodyComments);
			}
			else
			{
				console.log("Issues Obtained while fetching Comments");
			}
		});
	}

	}
	else
	{
		console.log("Issues Obtained");
	}

});