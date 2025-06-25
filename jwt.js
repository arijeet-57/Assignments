//Program that takes in a username and passord an returns a JWT token with the username encoded inside an object
//Should return null if the username is not a valid email or if the password is less than 6 characters. Use ZOD library

const jwt = require('jsonwebtoken');
const jwtPass = "hero";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJWT(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passordResponse.success){
        return null;
    }
    const signature = jwt.sign({
        username
    }, jwtPass);

    return signature;
}

const ans = signJWT("blaemail.dffcom", "ddfadfdffdff");
console.log(ans);