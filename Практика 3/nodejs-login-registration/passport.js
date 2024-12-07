const passport = require('passport');
//const GoogleStrategy = require('passport-google-oauth2').Strategy;
const OAuth2Strategy = require('passport-oauth2').Strategy;

//passport.serializeUser((user , done) => {
//    done(null , user);
//})
//passport.deserializeUser(function(user, done) {
//    done(null, user);
//});

passport.use(new OAuth2Strategy({
        authorizationURL: 'https://github.com/login/oauth/authorize',
        tokenURL: 'https://github.com/login/oauth/access_token',
        clientID:"Ov23liApSPXeCcpEcWOI", // Данные из вашего аккаунта.
        clientSecret:"cca6cea4eeb3b7b2d115140dc1cdabdad9752d37", // Данные из вашего аккаунта.
        callbackURL:"http://localhost:3000/auth/callback",
        //passReqToCallback:true
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ exampleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));