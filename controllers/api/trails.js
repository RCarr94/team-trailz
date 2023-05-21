const Trail = require('../models/trail');

function index(req, res) {
  Trail.find({}, function (err, trails) {
    res.render('trails/index', { title: 'TeamTrailz', trails });
  });
}

function newTrail(req, res) {
  res.render('trails/new', { title: 'Add Trail' });
}

function create(req, res) {
  const trail = new Trail(req.body);
  trail.user = req.user._id;
  trail.save(function (err) {
    if (err) return res.redirect('/trails/new');
    res.redirect(`/trails/${trail._id}`);
  });
}

function show(req, res) {
  Trail.findById(req.params.id, function (err, trail) {
    console.log(trail);
    res.render('trails/show', { title: 'Trail Info', trail });
  });
}

function deleteTrail(req, res) {
  Trail.findByIdAndDelete(req.params.id, function (err, trail) {
    if (err) return res.redirect('/trails');
    console.log(trail);
    res.redirect('/trails');
  });
}

module.exports = {
  index,
  new: newTrail,
  create,
  show,
  delete: deleteTrail,
};
