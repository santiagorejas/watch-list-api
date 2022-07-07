var { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// Auth0 configuration
const authConfig = {
    issuer: `https://dev-962oo4oo.us.auth0.com/`,
    audience: "https://dev-962oo4oo.us.auth0.com/api/v2/",
    algorithms: ["RS256"],
};

const secret = jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

const authenticated = jwt({ secret, ...authConfig });

module.exports = { authenticated };

// var { expressjwt: jwt } = require("express-jwt");
// const jwksRsa = require("jwks-rsa");

// const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
//     }),

//     // Validate the audience and the issuer.
//     audience: "https://dev-962oo4oo.us.auth0.com/api/v2/",
//     issuer: "https://dev-962oo4oo.us.auth0.com",
//     algorithms: ["RS256"],
// });

// module.exports = checkJwt;
