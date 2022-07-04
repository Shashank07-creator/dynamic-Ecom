const mongoose = require("mongoose");

const websiteSchema = mongoose.Schema({
    web_id:{
        type:String,
        require:true
    },
    part:{
        type:String,
        default:'Header'
    },
    label:{
        type:String,
        require:true
    },
    sideView:{
        type:String
    },
    viewType:{
        type:String
    },
    url:{
        type:URL
    },
    subNodeOf:{
        type:String
    },
    fileType:{
        type:String
    }
})


let model = mongoose.model('website details',websiteSchema)

module.exports = {
    add: async (data)=>{
        return await model.create(data)
    },
    delete: async (query)=>{
        return await model.deleteOne(query)
    },
    update: async (query,data)=>{
        return await model.updateOne(query,data)
    },
    search: async (query)=>{
        return await model.findOne(query)
    },
    searchAll: async (query,projection)=>{
        return await model.find(query,projection)
    },
    model:model
}