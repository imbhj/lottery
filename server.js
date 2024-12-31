const express = require('express');
const nunjucks = require('nunjucks');
const router = require('./route/lotto.route')
app = express();

app.set("view engine", "html");
app.use(express.urlencoded({extended:true}));
nunjucks.configure("views", {
    express: app
})




app.use(router)

app.listen(3000, () =>{
    console.log("서버 오픈");
})