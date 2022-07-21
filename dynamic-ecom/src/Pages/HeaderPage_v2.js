import react,{useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import {splitter} from '../Helper/Splitter_v2'
import HomePageV2 from './HomePage_v2';
export default function HeaderPageV2(props) {
    const [Data, setData] = useState([]);
    const [focus,setFocus] = useState([])
    const [pageData, setPageData] = useState({});
    const [pageFocus, setPageFocus] = useState(-1);
    function updateFocus(e,id){
        setFocus(id)
    }
    function add(){
        let newData = {
            label:'',
            type:'',
            id:Data.length,
            src:'',
            content:''
        }
        setData([...Data,newData])
        setFocus(newData.id)
    }
    const [lT, setlT] = useState('null');
    function headerBody(){
        function updateNodeValue(k,v){
            Data[focus][k] = v
            console.log(k,v)
            if(k === 'type'){
                setlT(v)
            }
        }
        return(
            <div className='header-body-detail'>
                <br/>
                <input type={'text'}  onChange={(e)=>updateNodeValue('label',e.target.value)} placeholder='Label'/>
                <select label='Type' name='Type' onChange={(e)=>updateNodeValue('type',e.target.value)}>
                    <option value='null'>--Type--</option>
                    <option value='text'>Text</option>
                    <option value='anchor'>Link</option>
                    <option value='image'>Image</option>
                    <option value='dropDown'>Drop Down</option>
                    <option value='content'> Long Content </option>
                    <option value='button'> Button </option>
                </select>
                {
                    (lT === 'anchor' || lT=== 'button') && <div className='link-container'>
                        <input type={'link'} onChange={(e)=>updateNodeValue('src',e.target.value)} placeholder='Link'/>
                    </div>
                     
                }
                {
                    lT === 'content' && <div className='content-container'>
                        <input type={'text'} onChange={(e)=>updateNodeValue('content',e.target.value)} placeholder='Content'/>
                    </div>
                     
                }
                {
                    lT === 'image' && <div className='image-header'>
                        <input type='text' placeholder='Image Link'/>
                        <input type='file' placeholder='Image'/>
                        <input type='text' placeholder='Image Name'/>
                    </div>
                }
            </div>
        )
    }

    return(
        <>
        <div className='header-page'>
            {<Sidebar className='sidebar' style={st.left} setFocus={setPageFocus}/>}
            <div className='header-body' style={st.right}>
                {Data.map(item=>{
                    if(item.id !== focus){
                        return <input type='text' disabled = 'true' value={item.label}/>
                    }
                    else{
                        // return <input type='text' onFocus = {(e)=>{updateFocus(e,item.id)}}/>
                        return headerBody()
                    }
                })}
            </div>
            {/* {<Sidebar className='sidebar' style={{width:'20vw',float:'left'}}/>} */}
            <button onClick={add} className='btn btn-primary'>ADD</button>
            <br/>
            <button onClick={(e)=>splitter(Data)} className='btn btn-primary'>SUBMIT</button>
        </div>
        </>
    )
}

let st = {
    left:{
        float:'left',
        width:'20vw',
        height:'70vh',
        backgroundColor:'green'
    },
    right:{
        float:'right',
        width:'78vw',
        backgroundColor:'blue',
        marginRight:'1vw'
    }
}

