const express = require('express')
const app = express()

// ------------------------------------ Required Imports --------------------------------------------------------------
const { log } = require('./Helper/logger')
let globalConfig = require('./globalUtility')

// -------------------------------------- File Specific ----------------------------------------------------------------
const { connect } = require("./Helper/Database")
let cors = require('cors')
const debug = require('./Middleware/Tracker')
const file = 'App.js'
// -------------------------------------- Router Require ---------------------------------------------------------------
let home = require('./Routes/Home')
let static = require('./Routes/Static')
let page = require('./Routes/Pages')
// ---------------------------------------- Properties -----------------------------------------------------------------
app.set('view engine','ejs')
app.use(debug.info)
app.use(cors())
app.use(express.json({}))
// ---------------------------------------- Custom Routes --------------------------------------------------------------

app.use('/',home)
app.use('/Static',static)
app.use('/page',page)

app.listen(globalConfig.port,()=>{
    log(file,'msg',`Server runing on ${globalConfig.port}`)
    connect()
})