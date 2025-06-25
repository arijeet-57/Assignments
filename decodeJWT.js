// Write a function that takes a jwt as input and return ture if the jwt can be DECODED (not verified). Return false otherwise

//true false
const jwt = require("jsonwebtoken");

function decodeJWT(token) {
    // true false logic
    const decoded = jwt.decode(token);
    if(decoded) {
        return true;
    }else{
        return false;
    }
}
console.log(decodeJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"))