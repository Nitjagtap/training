const { status } = require("express/lib/response");
const pool = require("../db/db");

class Controller {
    static async controller(req,res){
        try{
            pool.query("select * from users",(err,results)=>{
                if (err) throw err;
                res.status(200).json(results.rows);
        });
        }catch(e){

        }
    }

    static async controller2(req,res){
        try{
            var name = req.param.name;

            res.send("Name of user is : "+ name)
        }catch(e){

        }
    }
    static async controller3(req,res){
        try{
            var city= req.query.city;
            res.send("City of user is : " +city)
        }catch(e){

        }
    }
    static async controller4(req,res){
        try{
            phone = req.query.phone
            res.send("User phone Number is : " + phone)
        }catch(e){

        }
    }
    static async controller5(req,res){
        try{
            var pass = req.query.pass;
            res.send("User Password is : " + pass) 
        }catch(e){

        }
    }
    static async controller6(req,res){
        try{
            var country = req.query.country;
            res.send("User Country is : "+country)
        }catch(e){

        }
    }
}

module.exports=Controller