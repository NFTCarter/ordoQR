const qr = require("qrcode");
var url="https://madisons.ordo.menu/table-number?tableNumber=";
//var table=69;

var ssid = "C1212_5G";
var pw = "#worktogether";
var enc = "WPA";
var hidden = "false";
var table = "1";

generateQR(ssid, pw, enc, hidden);


function generateQR(ssid, pw, enc, hidden){
    let data = "WIFI:S:" + ssid + ";T:" + enc + ";P:" + pw + ";H:" + hidden + ";; TABLE" + table;
    
    qr.toFile("wifi.png",data,function(err,code)
    {
        if(err) return console.log("error");
    });
}