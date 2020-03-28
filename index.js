var express = require('express');
var app = express();

var port = 3000;

app.get('/', (request , response) => {
    response.send('<h1>Hello Hai Le Dep Try</h1>');
});

app.get('/users', (request , response) => {
    response.send('User List');
});


app.listen(port, () => {
    console.log('Server listening on port ', port)
})