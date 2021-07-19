const GoogleStrategy = require('passport-google-oauth20').Strategy;
const googleService = require('../helper_tools/third-party-services/google/writeUser')

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },

  async function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    const signed_in = await googleService.hasAlreadyRegisteredGoogleUser(profile.id)
    //console.log(signed_in)
    // if user hasnt been signed up  
     if(!signed_in) {
          // save and register
          googleService.createAndWriteGoogleUser(profile)
      }
      // redirect back to client server
      done(null, profile)
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
      done(null, user);
  })
}
