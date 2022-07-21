import {postCallout} from './Callout'
let schema = [], data = []
const splitter = (dataList)=>{
    let keyId = 0
    dataList.forEach(element => {
        schema.push({
            key:keyId,
            type:element.type,
        })

        data.push({
            key:keyId,
            label:element.label,
            src:element.src,
            content:element.content
        })
        keyId++
    });

    return new Promise((resolve, reject) => {
        pushData()
        resolve()
    })
}

const pushData = ()=>{
    postCallout('/page/s/s/null',undefined,{
        schema:schema,
        data:data
    })
    .then(res=>{
        if(res.data.status === 'SUCCESS'){
            schema = []
            data = []
            console.log('Success')
        }
        else{
            console.error('Error posting data to server for header');
        }
    })
    .err(r=>{
        alert('Err')
    })
}

export {pushData,splitter}