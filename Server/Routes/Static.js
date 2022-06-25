const router = require('express').Router()
const { log } = require('../Helper/logger')
let globalConfig = require('../globalUtility')
const file = 'Routes/Home'

router.get('/css/:name',(req,res)=>{
    let fileName = req.params.name
    try {
        if(fileName === null || fileName === undefined || fileName === ''){
            return res.status(500).send('Bad Request')
        }
        else{
            res.sendFile(`${globalConfig.style}\\${fileName}`)
        }
    } catch (error) {
        log(file,'err',error)
        res.status(500).send('Bad Request')
    }
})

router.get('/js/:name',(req,res)=>{
    let fileName = req.params.name
    try {
        if(fileName === null || fileName === undefined || fileName === ''){
            return res.status(500).send('Bad Request')
        }
        else{
            res.sendFile(`${globalConfig.script}\\${fileName}`)
        }
    } catch (error) {
        log(file,'err',error)
        res.status(500).send('Bad Request')
    }
})

router.get('/image/:name',(req,res)=>{
    let fileName = req.params.name
    try {
        if(fileName === null || fileName === undefined || fileName === ''){
            return res.status(500).send('Bad Request')
        }
        else{
            res.sendFile(`${globalConfig.image}\\${fileName}`)
        }
    } catch (error) {
        log(file,'err',error)
        res.status(500).send('Bad Request')
    }
})
module.exports = router