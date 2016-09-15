var express = require('express');
var app = express();


app.get('/', function(req, res){
   res.redirect('/api/whoami') ;
});

app.get('/api/whoami', function(req, res){
    var resObj = {};
    resObj.ipaddress = req.headers['x-forwarded-for'];
    resObj.language = req.headers['accept-language'].split(',')[0];
    resObj.software =  req.headers['user-agent'].match(/(\()[\w+\s.;]+/)[0].replace('(', '');
    
    res.json(resObj);
}).listen(process.env.PORT || 8080, function(){
    
});
    
