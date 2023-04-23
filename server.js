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


const port =process.env.PORT || 1000;


app.listen(port , function(req,res){

    console.log('listen port ${port}')
}
);