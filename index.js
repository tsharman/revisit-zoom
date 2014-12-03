var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json({limit: '2mb'}))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

if (!module.parent) {
    var port = process.env.PORT || 8000;
    var msg = 'listening on port ' + port;
    var server = app.listen(port, console.log.bind(console, msg));
    process.on('SIGINT', function() {
            server.close();
            process.exit();
            });
}

module.exports = app;
