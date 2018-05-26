// Import the discord.js module
const Discord = require('discord.js');
fs = require('fs');
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'consumer_key',
    consumer_secret: 'consumer_secret',
    access_token_key: 'access_token_key',
    access_token_secret: 'access_token_secret'
});

var args = process.argv.slice(2);
if(args.length == 0) {
    return;
}

var directory = args[0];

fs.readFile(directory + "annonce-twitter.txt", 'utf8', function (err, data) {

    var picture = fs.readFileSync(directory + "miniature.jpg");

    // Make post request on media endpoint. Pass file data as media parameter
    client.post('media/upload', {media: picture}, function(error, media, response) {

        if (!error) {
    
        // If successful, a media object will be returned.
            console.log(media);
        
            // Lets tweet it
            var status = {
                status: data,
                media_ids: media.media_id_string // Pass the media id string
            }
        
            client.post('statuses/update', status, function(error, tweet, response) {
                if (!error) {
                    console.log(tweet);
                }
            });
        }
    });

});







