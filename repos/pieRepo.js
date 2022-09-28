let fs = require("fs")
 const FILE_NAME = ("./assets/pie.json")
 //const stringi = stringify()
let pieRepos = {
    
       get:function(resolve,reject){
        fs.readFile(FILE_NAME,function(err,data){
            //console.log(data)
            if(err){
                reject(err)
            } 
            else{
                resolve(JSON.parse(data))
            }
        })
       
    },
    getId:function(id,resolve,reject){
        fs.readFile(FILE_NAME,function(err,data){
          if(err){
            reject(err)
          } else{
        let pie = JSON.parse(data).find(p=> p.id == id);
        resolve(pie);
          }
        })
    }
}
module.exports = pieRepos;