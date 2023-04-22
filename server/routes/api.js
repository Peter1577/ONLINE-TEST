const express = require ('express');
const api =  express.Router();
const fs = require ('fs');





api.post('/checkuser',(req,res)=>{
  let Email = req.body.Email;
  let Password = req.body.Password;
    console.log(Email+" "+Password);
    fs.readFile(__dirname +'/signup.json',(err,data)=>{
        if(err){
            return;
        }
     else{  
        const jsonData = JSON.parse(data);
        const present = jsonData.some(obj => obj.Email === Email && obj.Password === Password);
        console.log(present);
        if(present){
            res.status(200).send({success:true});
        }
        else{
            res.status(404).send({success:false});
        }
    }
    });
})

api.post('/senddata',(req,res)=>{
    const user = {Fname:req.body.Fname,
                  Lname:req.body.Lname,
                  Email:req.body.Email,
                  Password:req.body.Password,

    };
   
   fs.readFile(__dirname+'/signup.json',(err,data)=>{
    if(err){
        return;
    }

    const jsonData = JSON.parse(data);
    jsonData.push(user);
    const JsonString = JSON.stringify(jsonData);
fs.writeFile(__dirname+'/signup.json',JsonString,(err)=>{
    if(err){
        res.status(404).send({msg:'data error'});
    }
    else{
        res.status(200).send({msg:'successful'});
    }

    })
})
});

api.get('/quiz',function (req,res){
    fs.readFile(__dirname + '/quizdata.json',(err,data)=>{
        if(err){
            res.status(404).send("data not found")
        }
        else{
            const jsonData = JSON.parse(data);
            res.json(jsonData);

        }
    })
})



module.exports = api