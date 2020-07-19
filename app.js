var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Mumbai,IN&APPID=6906188a6a08644f0c6219bd41daa6cc&units=metric';

var server = http.createServer(function(request,response){
//all logic will go here
var request = require('request');
request(url, function(err, res, body){
    var data = JSON.parse(body);
    response.write("<html><body><div id='container'>");
        response.write("<h1>"+ 'City Name - : ' + data['name'] + '<br>' + "</h1>");
        response.write("<h2>"+ 'Temperature - : ' + data.main['temp'] + '<br>'+"</h2>");
        response.write("<h2>"+ 'Sunrise Time - : ' + new Date(data.sys['sunrise']*1000) +"</h2>");
        response.write("<h2>"+ 'Sunset Time - :  ' + new Date(data.sys['sunset']*1000)+"</h2>");
        response.write("</div></body></html>");
        response.end();
   
    });
}).listen(8081);
