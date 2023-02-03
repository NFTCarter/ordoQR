const qr = require("qrcode");
var url="https://madisons.ordo.menu/table-number?tableNumber=";
//var table=69;
const tables = ["1","2","3","4","5","6","7","8","9"];

tables.forEach(table => {
    generateQR(url,table);
});

function generateQR(baseUrl, tableNum){
    let data = baseUrl + tableNum;
    
    qr.toFile("qr"+tableNum+".png",data,function(err,code)
    {
        if(err) return console.log("error");
    });
}

