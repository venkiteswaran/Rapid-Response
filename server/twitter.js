

if(Meteor.isServer){
	Meteor.startup(function(){

		 var T = new Twit({
               consumer_key:         'e6wcugIgcqWfzAY5HtHXwlHXK', // API key
               consumer_secret:      '0D71g5xTp3FlaLVORk7ySbarFDVeUXElNvsdpPGFtXIZu4WIaK', // API secret
               access_token:         '2510560105-tnFSdlZsmG21QQUH6xzCjtzDS40D453SWFKKIZw', 
               access_token_secret:  'z4RF2VIQ7lj2142SgNMm3HZ233fL1HbrBcYx1QQbq071j'
        });


		    T.get('search/tweets',
        {
            q: '#testingrapidresponse',
            count: 100
        },
        function(err, data, response) {
            if(!err){
              var statuses=data.statuses;
              statuses.forEach(function(obj){
                    if(obj.geo!==null){
                       console.log(obj.geo.coordinates);
                      }
              });
            }
        }
    );
     
		 var stream=T.stream('statuses/filter',{track:'#testingrapidresponse'})
		 stream.on('tweet',function(tweet){
		 	console.log('hello');
		 	console.log(tweet);
		 });

	});
}