var express = require('express');
var app = express();
var https=require('https');
var fs = require("fs");

//utilizzato per risolvere problematiche CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//questa funzione get restituisce la lista totale delle biblioteche
app.get('/listaBiblioteche', function (req, res,next) {
   fs.readFile( __dirname + "/" + "biblioteche.json", 'utf8', function (err, data) {
       console.log('Richiesta GET generica');
       res.end( data );
   });
})
//questa funzione restituisce la lista delle informazioni per una determinata biblioteca
app.get('/:id', function (req, res,next) {
   fs.readFile( __dirname + "/" + "biblioteche.json", 'utf8', function (err, data) {
       biblioteche = JSON.parse( data );
       var biblioteca = biblioteche["biblioteca" + req.params.id] 
       console.log('Richiesta GET su biblioteca con id %s',req.params.id);
       res.end( JSON.stringify(biblioteca));
   });
})

app.get('/', function (req, res,next) {
       console.log('Richiesta GET vuota');
       res.end( ':D - greetings from www.nichoalsgiordano.it');
})



var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server di test in ascolto su http://%s:%s", host, port)

})

/*
codice per un servizio https over ssl cert!
//array contenente certificati self-signed di test
var options = {
  key: fs.readFileSync('test-certificate/20623981-localhost.key'),
  cert: fs.readFileSync('test-certificate/20623981-localhost.cert')
};
var server=https.createServer(options,app);
server.listen(8081, function(){
        console.log("Servizio https.ssl.selfsigned in esecuzione su localhost:8081")
    });
*/