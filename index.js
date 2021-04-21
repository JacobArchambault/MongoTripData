import express from 'express';
const app = express();                  // create the express app

app.use('/', (_req, res) =>      // when the default route is requested...
    res.sendFile('index.html', {root: '.'})         // call this function and send a response
);

app.listen(3000, function () {
    console.log('Listening on port 3000, ctrl-c to quit.');
});