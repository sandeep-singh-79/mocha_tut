var express = require("express")
var converter = require("./converter")
var app = express()

app.get("/rgbToHex", (req, res) => {
    res.send(converter.rgbToHex(
            parseInt(req.query.red, 10), 
            parseInt(req.query.blue, 10), 
            parseInt(req.query.green, 10)
        )
    );
});

app.get("/hexToRgb", (req, res) => {
    res.send(JSON.stringify(converter.hexToRgb(req.query.hex)))
});

app.listen(3000);