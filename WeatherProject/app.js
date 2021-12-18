const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended :true}));
app.get("/", function (req,res) {
    res.sendFile(__dirname + "/index.html")
})

app.post(`/index.html`,function (req,res) {
    const appkey = "2643538274217d0ffd868253f584723b";
    const queryCity =req.body.cityName; 
    const units = "metric";
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+queryCity+'&appid='+appkey+'&units='+units;
    https.get(url,function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description  = "The Weather is currently: " +  weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            // console.log(description);
            
            res.write("<p>"+ description+"</p>")
            res.write( "<h1>The temperature in "+queryCity+" is " + temp + " degrees Celsius</h1>")
            res.write("<img src ="+imageURL+">")
            // Only 1 send response is possible but multiple writes are possible
            res.send()
        })
    })

    // res.send("Server is up and running.");

    console.log("Post Request Recieved");
})



app.listen(3000, function () {
    console.log("Server is running on port 3000.");
})