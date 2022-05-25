const jwt = require('jsonwebtoken');
const secret = './secret';
const expiration = '2h';

function getKey(header, cb) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

module.exports = {
    authMiddleware = function ({ req }) {
        // allow the token to be sent via body, query or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // req headers: ["bearer", "token"]
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        // error catching for a missing token in the request
        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('invalid token')
        }

        return req;
    },
        const user = new Promise((resolve, reject) => {
            jwt.verify(token, getKey, options, (err, decoded) => {
                if (err) {
                    return reject(err);
                }
                resolve(decoded.email);
            });
        });
        return {
            user,
        }
    },
}