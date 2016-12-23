const router = require('express').Router();
const Color = require('../models/colorSchema');

router.get('/', function(req, res) {

//finds all icons inside color database
  Color.find({}).then(function(icons){
        res.send(icons);

  }).catch(function(err){
    console.log('Error in /icons', err);
    res.sendStatus(500);
  });
});

//update color
router.put('/:id', function(req, res) {
  var id = req.params.id;

  Color.findById(id, function(err, category){
      if (err){
        res.sendStatus(500);
        return;
      }
      //set values
      data.id = req.body.id;
      data.pin = req.body.pin;
      data.color = req.body.color;
      data.inUse = req.body.inUse;

    color.save(function (err, updatedColor){
      if (err){
        res.sendStatus(500);
        return;
      }
      res.send(updatedColor);
    });
  });
}); //end update Color

module.exports = router;
