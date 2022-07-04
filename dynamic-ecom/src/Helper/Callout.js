function createResponse(){
    let res = {
        error:'',
        isError:false,
        data:'',
        isSuccess:false
    }

    return res
}

let getCallout = async (url)=>{
    let res = createResponse()
    try{
        console.log('calling get request',url)
        let response = await fetch(url)
        res['data'] = await response.json()
        res['isSuccess'] = true
        return res
    }
    catch(ex){
        res['isError'] = true
        res['error'] = ex
        return res
    }
}

let postCallout = async (url,heads,body)=>{
    let res = createResponse()
    let default_headers = {
        'Content-Type':'application/json'
    }
    try{
        let response = await fetch(url,{
            method: 'POST',
            mode:'cors',
            cache:'no-cache',
            headers:heads || default_headers,
            body:JSON.stringify(body)
        })
        res['data'] = await response.json()
        res['isSuccess'] = true
        return res
    }
    catch(ex){
        res['isError'] = true
        res['error'] = ex
        return res
    }
}

export  {getCallout,postCallout}