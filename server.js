var express = require('express');
var fs = require('fs');

var app = express();

app.use((req,res,next)=>{
    var log = `${new Date().toString()}`;
    console.log(log);
    console.log(req.ip);
    fs.appendFile('server.log',log + req.ip + `\n`,(err)=>{
        if(err)console.log('error occurred!');
    });
    next();
});

app.get('/',(req,res)=>{
    res.send("HÜSEYİNİN AMK<br>\
    FİJİNİN AMK<br>\
    BERKAYIN AMK<br>\
    BERKESİN AMK<br>\
    ERCÜNÜN AMK<br>\
    ERDALIN AMK<br>\
    HALİLİN AMK<br>\
    İSMAİLİN AMK<br>\
    İZZETİN AMK<br>\
    MUSTAFANIN AMK<br>\
    TOLGANIN AMK");
});

app.listen(3001);