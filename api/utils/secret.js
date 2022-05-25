const jwksClient = require('jwks-rsa');


const client = jwksClient({
  jwksUri:
    "https://" + process.env.REACT_APP_AUTH0_DOMAIN + "/.well-known/jwks.json",
});

function secret(header, cb) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

module.exports = secret;