import './Loader.css'
let initialLoader = (delay)=>{
    console.log(delay)
    return(
        // <div style={reverse?styleRevRotate:styleRotate} className={`${reverse?'reverse-rotate':'rotate'} circle loading`}>
        // </div>
        <div style={{animationDelay:`${delay*0.1}s`}} className='rotate circle'>
        </div>
    )
}

let cols = []
for(let i=0;i<65;i++){
    cols.push(i)
}

let Loader = ()=>{
    return(
        <div className='loading'>
        <p>Loading ...</p>
        <div id='loader' style={{backgroundColor:'rgba(34,57,75,255)',marginLeft:'30%',width:'40%',padding:'0.4%',paddingLeft:'1%'}}>
            {cols.map(item=>{
               return initialLoader(item) 
            })}
        </div>
        </div>
    )
}

export default Loader