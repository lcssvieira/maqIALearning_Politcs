const findByEmail =  async (application, email) =>{
        let userModel = application.app.models.users;
        let user = await userModel.findOne({email});
        return user;
}


// in order to create a new user
const register = async (application, parameters) =>{
    let userModel = application.app.models.users;
    let user = new userModel(parameters);
    let result = await user.save();  
    return result;   
}

module.exports = () => {
    return {
        register: register,
        findByEmail: findByEmail
    }
}