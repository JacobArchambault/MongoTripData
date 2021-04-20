import express from 'express';
let app = express();                  // create the express app

app.use('/', (_req, res) =>      // when the default route is requested...
    res.send('Hello World!')         // call this function and send a response
);

app.listen(3000, function () {
    console.log('Listening on port 3000, ctrl-c to quit.');
});