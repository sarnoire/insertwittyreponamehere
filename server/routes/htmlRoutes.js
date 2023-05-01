<<<<<<< HEAD
const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
=======
const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
>>>>>>> f59680aa84ea7fbcbbb3e4313eff14f0903ccc59
