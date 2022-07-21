const router = require('express').Router()
const { log } = require('../Helper/logger')
let globalConfig = require('../globalUtility')
const file = 'Routes/Page'
let mock = require('../data/PageMock')
const { dataStorage } = require('../Controller/pageController')

router.get('/:pageId',(req,res)=>{
    let pageId = req.params.pageId
    try{
        if(pageId == null){
            log(file,'err','badId')
            return res.status(404).send('badId')
        }
        return res.json(mock)
    }
    catch(ex){
        log(file,'err',ex)
        res.status(500).send('Intrnal Server Error')
    }

})

router.get('/:pageId/r/:recordId',(req,res)=>{
    try{
        let pageId = req.params.pageId
        let recordId = req.params.recordId
        if(pageId == null || pageId == undefined || recordId == null || recordId == undefined){
            log(file,'err','null Id present')
            return res.status(404).send('Page not Found')
        }
        return res.json(mock)
    }
    catch(err){
        log(file,'err',err)
        return res.status(500).send(err)
    }
})

router.post('/s/:recordType/:recordId',(req,res)=>{
    try {
        let recordId = req.params.recordId
        let recordType = req.params.recordType
        let flag = false

        if(recordId == null || recordId == undefined){
            log(file,'info','Storing new Schema and Data')
            flag = true
        }
        let schema = req.body.schema
        let data = req.body.data

        dataStorage(schema)
        dataStorage(data)
        // if (recordType == 's' && flag){
        //     log(file,'info','Initiating Storage for Schema')
        //     // controllerStorage
        // }
        // else if(recordType == 's'){
        //     log(file,'info','Schema Exist')
        //     // processingData for record
        // }
        // else{
        //     log(file,'info','')
        // }
        return res.status(200).json({Status:'Done'})
        

    } catch (error) {
        log(file,'err',error)
        res.status(500).send(error)
    }
})

module.exports = router