const Trail = require('../../models/trail');

async function index(req, res) {
  const trails = await Trail.find({});
  console.log(trails);
  res.json(trails);
}

async function getById(req, res) {
  const id = req.params.id;
  const trail = await Trail.findById(id);
    res.json(trail);

}

async function create(req, res) {
  try {
    const trail = await Trail.create(req.body);
    res.json(trail);
  } catch(err) {
    res.status(400).json(err);
  }
}


module.exports = {
  index, 
  getById,
  create
}