const { Admin } = require("../db");
//Middleware for handling auth
function adminMiddleware(req, res, next) {
    //Implements admin auth logic
    //Checks the headers and validate the admin from the admin DB.
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username: username,
        password: password
    })
    .then(function(value) {
        if(value) {
            next();
        }else{
            res.status(403).json({
                msg: "User does not exist!"
            });
        }
    })
}

module.exports = adminMiddleware;