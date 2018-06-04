const route = (application) =>{
    application.get("/", (req, res)=>{
        res.send("Ok");
    });
}

module.exports = route;