const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      query = require('querystring'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      config = require('./config.js'),
      cors = require('cors');

      const app = express();

      app.use(passport.initialize());
      app.use(passport.session());

      app.use(express.static('./public'))

      var port = 3000
app.listen(port, function() {
console.log("listening on port " + port)
})
