var express = require('express');
var router = express.Router();
var zoneController = require('../controllers/ZoneController');

router.get('/:resource', (req,res,next) => {

  let resource = req.params.resource

  if(resource == 'zone'){
    zoneController.find(req.query, (err,results) => {
      if(err) {
        res.json({
          confirmation: 'fail',
          message: err
        })
      }

      res.json({
        confirmation: 'success',
        results: results
      })

    })
  }

})

router.get('/:resource/:id', (req,res,next) => {
  let resource = req.params.resource
  let id = req.params.id
  if(resource == 'zone'){
    zoneController.findById(id, (err, result) => {
      if(err){
        res.json({
          confirmation: 'fail',
          message: 'Id Not Found'
        })
      }

      res.json({
        confirmation: 'success',
        results: result
      })
    })
  }
})

router.post('/:resource', (req,res,next) => {
  let resource = req.params.resource
  if(resource == 'zone'){
    zoneController.create(req.body, (err,result) => {
      if(err){
        res.json({
          confirmation: 'fail',
          message: err
        })
      }

      res.json({
        confirmation: 'success',
        result: result
      })
    })
  }
})

module.exports = router
