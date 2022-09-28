const express = require("express");
const bodyParser = require("body-parser")

const pieRepos = require("./repos/pieRepo")

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

const router = express.Router();

router.get('/',(req,res,next)=>{

    pieRepos.get(function(data){
        
        res.status(200).json({
            "status":200,
            "statusText":"Ok",
            "message":"All pies retrieved",
            "data": data
        });
    },function(err){
        next(err);
    });
})
router.get("/:id",(req,res,next)=>{
    pieRepos.getId(req.params.id,function(data){
        if(data){
            res.status(200).json({
                "status":200,
                "statusText":"Ok",
                "message":"Single pie received",
                "data":data
                
            })
        } else{
            res.status(404).json({
                "status":404,
                "statusText":"Not Found",
                "message":`The ${req.params.id} could not be found`,
                "error": {
                    "code":"Not Found",
                    "message":`The ${req.params.id} could not be found`
                }
            });
        }
    },function(err){
                next(err)//passed it to the middle ware if it exist 
            }
            )
    })
app.use('/api/', router)

app.listen(3210,()=>{
    console.log(`The port is running on 3210`)
})