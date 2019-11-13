const h = require('../lib/headers');
module.exports = h((req, res) => {
  res.end('Housefly\n');
});
