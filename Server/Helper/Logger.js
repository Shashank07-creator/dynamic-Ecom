exports.log = (file,type,msg)=>{
    const d = new Date();
    msg = `${d.getDate()+'-'+d.getMonth()+'-'+d.getFullYear()} :-: ${d.getHours()+':'+d.getMinutes()} @ ${file} # ${msg}`
    if(type === 'err'){
        console.log('\x1b[31m%s\x1b[0m',`[ERR ]  ${msg}`)
    }
    else if(type === 'API'){
        console.log('\x1b[35m%s\x1b[0m',`[API ]  ${msg}`)
    }
    else if(type === 'API Exit'){
        console.log('\x1b[32m%s\x1b[0m',`[API ]  ${msg}`)
    }
    else if(type==='warn'){
        console.log('\x1b[33m%s\x1b[0m',`[WARN]  ${msg}`)
    }
    else if(type==='msg'){
        console.log('\x1b[34m%s\x1b[0m',`[MSG ]  ${msg}`)
    }
    else{
        console.log(`[INFO]  ${msg}`)
    }
}