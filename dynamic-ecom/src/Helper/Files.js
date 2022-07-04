let addFile = (info,id)=>{
    let component = document.getElementsByTagName('head')[0]
    if(info.fileType === 'css'){
        let style = document.createElement('link')
        style.rel = 'stylesheet'
        style.media = 'all'
        style.href=`/Static/css/${info.label}`
        component.appendChild(style)
    }
    else if(info.fileType === 'script'){
        let script = document.createElement('script')
        script.setAttribute('src',`/Static/js/${info.label}`)
        component.appendChild(script)
    }
    return (
        <></>
    )
}   

export {addFile}