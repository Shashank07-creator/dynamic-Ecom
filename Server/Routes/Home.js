const router = require('express').Router()
const { log } = require('../Helper/logger')
let globalConfig = require('../globalUtility')
const file = 'Routes/Home'
let mock = require('../data/HeaderMock')
router.get('/',(req,res)=>{
    res.send('Working Fine')
})

router.get('/Home/:website_id',(req,res)=>{
})

router.post('/HeaderData',(req,res)=>{
    try{
        const userId = req.body.userId
        log(file,'info',userId)
        res.json(mock.basic)
    }
    catch(error){
        log(file,'err',error)
    }
    
})

module.exports = router