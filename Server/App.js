const express = require('express')
const app = express()
let globalConfig = require('./Config/globalUtility')

app.listen(globalConfig.port,()=>{
    console.log(`Server runing on ${globalConfig.port}`)
})