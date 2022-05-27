const jwt = require('jsonwebtoken');
const secret = './secret';
const expiration = '2h';

// function getKey(header, cb) {
//   client.getSigningKey(header.kid, function (err, key) {
//     var signingKey = key.publicKey || key.rsaPublicKey;
//     cb(null, signingKey);
//   });
// }

const options = {
    audience: process.env.REACT_APP_AUTH0_CLIENT_ID,
    issuer: "https://" + process.env.REACT_APP_AUTH0_DOMAIN,
    algorithms: ["RS256"],
};

module.exports = {
    authMiddleware: function ({ req }) {
        // allow the token to be sent via body, query or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // the original code Danila had written was just for a req in the headers
        // I changed it to a let, rather than a const. It felt trivial to change it. It may not actually matter.

        // req headers: ["bearer", "token"]
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        // error catching for a missing token in the request
        if (!token) {
            return req;
        }

        try {
            // the following two commented lines are the original code
            // const user = new Promise((resolve, reject) => {
            // jwt.verify(token, getKey, options, (err, decoded) => {
                // George has updated the code to match better the formatting from the in-class assignment 26 from week 22
                // The main mismatch is the third argument, which was originally {options} but now it is {maxAge: expiration}
            const { data } = jwt.verify(token, secret, { maxAge: expiration }, (err, decoded) => {
                if (err) {
                    return reject(err);
                }
                resolve(decoded.email);
            });
            // Danila originally had this as just: return {user}
            req.user = data;
        } catch {
            console.log('invalid token')
        }
        // could be changed to {req.user}
        return req;
    },
}