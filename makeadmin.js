const User = require('./models/User');
const bcrypt = require('bcrypt');
async function makeAdmin() {
    try {
        let user = await User.findOne({ email:'chaudharytapasya79@gmail.com'});
        if(user){
            console.log("user updated");
        }else{
            user = new User();
        
        //let user = new User();
        user.firstName = 'Tapasya';
        user.lastName = 'chaudhary';
        user.email = 'chaudharytapasya79@gmail.com';
       
        let encryptedpassword = bcrypt.hashSync('123456', 10);
        user.password = encryptedpassword;
        user.userType = 'Admin';
        await user.save();
        console.log('user saved successfully....');
       } 
        }
        catch (err) {
        console.error(err);
    }
}
module.exports = makeAdmin;