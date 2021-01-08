const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json())
leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders details to you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leader');
})
.delete((req, res, next) => {
    res.end('Deleting all leaderss');
});

leaderRouter.route('/:leaderId')
.get((req,res,next)=>{
    res.end('will send the details of the leader'+req.params.leaderId);
  })
.post((req, res, next) => {
   res.statusCode = 403;
   res.end('POST  operation not supported on /leader');
 })
.put((req, res, next) => {
   res.write('Updating the promotion: ' + req.params.leaderId + '\n');
   res.end('Will update the promotion: ' + req.body.name + 
         ' with details: ' + req.body.description);
 })
 
.delete((req, res, next) => {
     res.end('Deleting leader: ' + req.params.leaderId);
 });
module.exports = leaderRouter;