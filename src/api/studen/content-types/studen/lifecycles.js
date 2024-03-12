const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KEY, { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 60 });

 module.exports = {
    async beforeCreate(event) {
        event.params.data.Mobile = cryptr.encrypt(event.params.data.Mobile);
    },
    async afterFindMany(event) {
        const {result} = event;
        result.forEach(item => {
            if (item.Mobile) {
                item.Mobile = cryptr.decrypt(item.Mobile);
            }
        });
    },
    async afterFindOne(event){
        const {result} = event;
        if (result && result.Mobile) {
            result.Mobile = cryptr.decrypt(result.Mobile);
        }
    }    
 }

 