//import md5
const md5 = require('md5')

module.exports ={
    async beforeCreate(event){
        console.log('beforeCreate 😶‍🌫️',event.params.data)
        event.params.data.mobile = md5(event.params.data.mobile)
    } 
}