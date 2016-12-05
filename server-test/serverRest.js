var express = require('express');
var app = express();
var https=require('https');
var fs = require("fs");

//durante l'inizializzazione del servizio tutti i posti sono liberi
var posti={1:0,2:0,3:0,4:0,5:0};
var ok={"result":"ok"};
var fail={"result":"fail"};

//utilizzato per risolvere problematiche CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/postiOccupati',function(req,res){
    res.end( JSON.stringify(posti));
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

app.post('/studenteIn/:id',function(req,res){
    fs.readFile( __dirname + "/" + "biblioteche.json", 'utf8', function (err, data) {
       biblioteche = JSON.parse( data );
       var residui = biblioteche["biblioteca" + req.params.id]['postazioni-studio'];
        console.log("Studente in ingresso sulla biblioteca %s",req.params.id)
        if(posti[req.params.id]<residui){
            posti[req.params.id]=posti[req.params.id]+1;
            res.end(JSON.stringify(ok));
        }
        else res.end(JSON.stringify(fail));
   });
});

app.post('/studenteOut/:id',function(req,res){
    fs.readFile( __dirname + "/" + "biblioteche.json", 'utf8', function (err, data) {
       biblioteche = JSON.parse( data );
       var residui = biblioteche["biblioteca" + req.params.id]['postazioni-studio'];
        console.log("Studente in uscita sulla biblioteca %s",req.params.id)
        if(posti[req.params.id]>0){
            posti[req.params.id]=posti[req.params.id]-1;
            res.end(JSON.stringify(ok));
        }
        else res.end(JSON.stringify(fail));
   });
});

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