const { log } = require('../Helper/logger')
let file = 'Controller/pageController'
exports.dataStorage = (data)=>{
    log(file,'warn','Initiated storing data')
    log(file,'info',JSON.stringify(data))
    return
}


exports.dataRetriver = (web_Id,schema_Id,page_Id)=>{
    // records = await model.searchAll(query)
    // schema = await model.serachAll(query)
    let response_Data = []
    //records.sort((a,b)=>{if(a.key > b.key) return 1 else return -1})
    //schema.sort((a,b)=>{if(a.key > b.key) return 1 else return -1})
    /*for(let i=0;i<schema.length;i++){
        let data = {}
        data['key'] = i
        ...
        ...
        ...
        ...
        response_Data.push(data)
    */
   return response_Data
}