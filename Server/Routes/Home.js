const router = require('express').Router()
const { log } = require('../Helper/logger')
let globalConfig = require('../globalUtility')
const file = 'Routes/Home'

router.get('/',(req,res)=>{
    res.send('Working Fine')
})

router.get('/Home/:website_id',(req,res)=>{
})

module.exports = router