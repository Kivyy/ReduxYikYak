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

  findById: (id, callback) => {
    Zone.findById(id,(err,zone) => {
      if(err){
        callback(err,null);
        return
      }

      callback(null,zone);
    })
  },

  update: () => {

  },

  create: (params, callback) => {
    let zips = params['zipCodes']
    let zip = zips.split(',')
    let newZips = []

    zip.forEach((zipCode) => {
      newZips.push(zipCode.trim());
    })
    params['zipCodes'] = newZips
    Zone.create(params, (err,zone) => {
      if(err){
        callback(err,null);
        return
      }
      callback(null,zone);
    })
  },

  destroy: () => {

  }
}
