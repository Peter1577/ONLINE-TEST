const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./server/routes/api');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',api);

app.use(express.static(path.join(__dirname,'dist/online_test')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/online_test/index.html'))
}
)



app.listen(1000 , function(req,res){

    console.log('http://localhost:1000')
}
);