
const routeRegistration = (application) =>{
    application.post("/auth/register", async (req, res) => {
        const helper = application.app.helper;
        const {email} = req.body;
        const  authCtrl = application.app.controllers.auth;;
        try {
            if (await authCtrl.findByEmail(application, email))
                helper.badRequest(res, "User already existis");
            else {
                let result = await authCtrl.register(application, req.body);
                result.password = undefined ;// in order not to return password
                res.send(result);
            }
        }
        catch (err){
            helper.badRequest(res, `Error: Failed to register user: ${err}`);
        }
    });
}

module.exports = (application) =>{
   routeRegistration(application);
}