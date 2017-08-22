let Zone = require('../models/Zone')

module.exports = {
  find: (params,callback) => {
    Zone.find(params,(err,zones) => {
      if(err){
        callback(err,null)
        return
      }
      callback(null, zones)
    })
  },

  findById: () => {

  },

  update: () => {

  },

  create: () => {

  },

  destroy: () => {

  }
}
