var express = require('express');
var router = express.Router();
let controllers = require('../controllers');
var zoneController = require('../controllers/ZoneController');

router.get('/:resource', (req,res,next) => {

  let resource = req.params.resource
  let controller = controllers[resource]

  if(controller == null ){
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource Request: ' + resource
    })
  }

  controller.find(req.query, (err, results) => {
    if(err){
      res.json({
        confirmation: 'fails',
        message: err
      })
    }
    res.json({
      confirmation: 'success',
      results: results
    })
  })
})

router.get('/:resource/:id', (req,res,next) => {
  let id = req.params.id
  let resource = req.params.resource
  let controller = controllers[resource]

  controller.findById(id, (err, result) => {
    if(err){
      res.json({
        confirmation: 'fails',
        message: 'Not Found'
      })
    }
    res.json({
      confirmation: 'success',
      results: result
    })
  })
})

router.post('/:resource', (req,res,next) => {
  let resource = req.params.resource
  let controller = controllers[resource]

  controller.create(req.body, (err, result) => {
    if(err){
      res.json({
        confirmation: 'fails',
        message: 'Not Found'
      })
    }
    res.json({
      confirmation: 'success',
      results: result
    })
  })
  
})

module.exports = router
