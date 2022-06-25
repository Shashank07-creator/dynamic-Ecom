const{log} = require('../Helper/logger')
module.exports = {
    info : (req,res,next)=>{
        log('','API','Started Processing for '+req.originalUrl)
        next()
        log('','API Exit','Served Information for '+req.originalUrl)
    }
}