const UserService = require('../services/UserService')




module.exports = {


    getUser: (req, res)=>{
        
        let json = {error:'rfsdf', result:[]};
        
        //let usuarios = await UserService.getUser() 
        
    console.log('json retornado no console')

        res.json(json)

 
    },



    getAtualizou: (req, res)=>{
        
        let json = {error:'atualizou', result:'servidor aws'};
        
        //let usuarios = await UserService.getUser() 
        
    console.log('json retornado no console')

        res.json(json)

 
    }




    



}