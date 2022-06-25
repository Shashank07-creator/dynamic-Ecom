const mongoose = require('mongoose')
const { log } = require('./logger')
const file = 'Helper/Database'
let config = require('../globalUtility')
exports.connect = () => {
    mongoose.connect(config.mongo,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
        .then(() => {
            log(file, 'msg', 'Database connected succesfully')
        })
        .catch((error) => {
            log(file, 'err', 'Cannont connect to database ' + error)
        })
}