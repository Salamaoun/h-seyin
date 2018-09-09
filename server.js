var express = require('express');
var fs = require('fs');
var hbs = require('hbs');
const port = process.env.PORT || 3001;

var app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use((req,res,next)=>{
    var log = `${new Date().toString()}`;
    console.log(log);
    console.log(req.ip);
    fs.appendFile('server.log',log + req.ip + `\n`,(err)=>{
        if(err)console.log('error occurred!');
    });
    next();
});

// app.use((req,res,next)=>{
//     res.send("This site is under maintenance!")
// })

app.use(express.static(__dirname + '/views'));


app.get('/',(req,res)=>{
    res.render("home.hbs", {
        pageTitle: "G-Men + Hüso Katalog",
        welcomeMessage: "Buradan bütün orospu çocuklarını inceleyebilirsiniz, linkler güncellendikçe eklenecektir."
    });
});

app.get('/huseyin',(req,res)=>{
    res.render("hüseyin.hbs",{
        pageTitle: "Hüseyin AKKürt",
        welcomeMessage: "Allahsız köpek"
    })
})

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});