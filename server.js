'use strict';

require('console-stamp')(console, {
    metadata: function () {
        return ('[' + process.memoryUsage().rss + ']');
    },
    colors: {
        stamp: 'yellow',
        label: 'white',
        metadata: 'green'
    }
});

let express = require('express');
let http = require('http');

let app = express();
app.server = http.createServer(app);

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

app.server.listen(process.env.port || 8080, () => {
	console.info('Listening @ http://127.0.0.1:' + app.server.address().port);
});