const Trail = require('../../models/trail');

async function index(req, res) {
  const trails = await Trail.find({});
  res.json(trails);
}


module.exports = {
  index
}