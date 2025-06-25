//write a function that takes jwt as an input and returns true if the jwt can be verified. return false otherwise

const jwt = require("jsonwebtoken");
const pass = "hello";

function verifyJWT(token) {
    let ans = true;
    try {
        jwt.verify(token,  pass);
    }catch(e) {
        ans = false;
    }
    return ans;
}

console.log(verifyJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"));


