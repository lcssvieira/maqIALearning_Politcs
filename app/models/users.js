const bcrypt = require('bcryptjs')

const encryptPassword = (schema) =>{
    schema.pre('save', async function(next){
        let hash = await bcrypt.hash(this.password, 10);
        this.password =  hash;
        next();
    });
}

const defineModel = (appplication) =>{
    let mongodb = appplication.config.database.mongodb;
    let  userSchema = new mongodb.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    encryptPassword(userSchema);
    let userModel = mongodb.model("users", userSchema);
    return userModel;
};

module.exports =  defineModel;