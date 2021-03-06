const mongoose = require("mongoose");

const websiteSchema = mongoose.Schema({
    schemaId:{
        type:String,
        required:true
    },
    type:{
        type:String
    },
    web_id:{ // Required to verify schema for correct user
        type:String,
        required:true
    },
    viewLocation:{
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