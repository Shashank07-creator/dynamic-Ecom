let addFile = (info,id)=>{
    let component = document.getElementById(id)
    if(info.fileType === 'css'){
        let style = document.createElement('style')
        style.setAttribute('href',`/Static/css/${info.filename}`)
        style.setAttribute('type','text/stylesheet')
        component.appendChild(style)
    }
    else if(info.fileType === 'script'){
        let script = document.createElement('script')
        script.setAttribute('src',`/Static/js/${info.filename}`)
        component.appendChild(script)
    }
}   

export {addFile}