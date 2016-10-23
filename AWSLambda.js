//---------------------------------------------------------------------	
// AWS Lambda Code Configuration 	 
// trigger: Alexa Skills Kit						
// runtime: Node.js 4.3								
// handler: index.hadler							
// role: Choose Existing Role
// existing role: lambda_basic_execution
//----------------------------------------------------------------------


var http = require('http');
var URLParser = require('url');
var https = require('https');

exports.handler = function (json, context) {
    try {
        // A list of URL's to call for each applicationId
        var handlers = {
            'appId':'url',
	    // replace xxxxxxxx with your Alexa Skill Kit app ID here
            'amzn1.ask.skill.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx': 'maker.ifttt.com'
            };

        // Look up the url to call based on the appId
        var url = handlers[json.session.application.applicationId];
        if (!url) { context.fail("No url found for application id"); }
        var parts = URLParser.parse(url);
        var post_data = JSON.stringify(json);
        var trigger = json.request.intent.slots.event.value;

        // An object of options to indicate where to post to
        var post_options = {
			host: 'maker.ifttt.com',
			//replace xxxxx with your IFTTT maker key
			path: '/trigger/' + trigger +'/with/key/xxxxxxxxxxxxxxxxxx',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			}
        };
        // Initiate the request to the HTTP endpoint
        var req = http.request(post_options,function(res) {
            var body = "";
            // Data may be chunked
            res.on('data', function(chunk) {
                body += chunk;
            });
            res.on('end', function() {
            // When data is done, finish the request
            context.succeed(
                {
                "version": "1.0",
                "response": {
                    "outputSpeech": {
                    "type": "PlainText",
                    "text": "Thanks, I triggered " + trigger 
                    },
                "shouldEndSession": true
                },
                "sessionAttributes": {}
                }
            );
            });
        });
        req.on('error', function(e) {
            context.fail('problem with request: ' + e.message);
        });
		
        // Send the JSON data
        req.write(post_data);
        req.end();        
    } catch (e) {
        context.fail("Exception: " + e);
    }
};
