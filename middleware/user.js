const { User } = require ("../db");
//Middleware for handling auth
function userMiddleware(req, res, next) {
    //Implements user auth logic
    //Checks the headers and validate the user from the user DB.
    const username = req.headers.username;
    const password = req.headers.password;
    
    User.findOne({
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

module.exports = userMiddleware;