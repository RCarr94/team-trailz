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
    req.body.user = req.user._id;
    const { trailName, location } = req.body;
    const existingTrail = await Trail.findOne({ trailName, location });

    if (existingTrail) {
      throw new Error('Trail already exists!');
    }

    const newTrail = await Trail.create(req.body);

    res.json(newTrail);
  } catch(err) {
    console.log(err.message);
    res.status(400).json({ error: err.message || 'Trail creation failed' });  
  }
}

async function updateTrail(req, res) {
  try {
    const updatedTrail = await Trail.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTrail);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update trail' });
  }
}


module.exports = {
  index, 
  getById,
  create,
  update: updateTrail
}