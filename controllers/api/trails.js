const Trail = require('../../models/trail');

async function index(req, res) {
  const trails = await Trail.find({});
  res.json(trails);
}

async function getById(req, res) {
  const id = req.params.id;
  const trail = await Trail.findById(id);
    res.json(trail);

}


module.exports = {
  index, 
  getById
}