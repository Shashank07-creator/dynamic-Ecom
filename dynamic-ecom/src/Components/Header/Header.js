import React, { useEffect, useState } from 'react'
import { postCallout } from '../../Helper/Callout';
import { addFile } from '../../Helper/Files';
import './HeaderDefault.css'
function handleValueChange(e){
    console.clear()
    console.log(e.target.value)
}
export default function Header(props) {
    const [data, setData] = useState({});
    useEffect(() => {
        postCallout('/headerData',undefined,{
            userId:null
        }).then(
            res=>{
                if(res.isSuccess){
                    setData(res.data)
                    props.loaded()
                }
                else{
                    alert('Error Fetching Header Data')
                }
            }
        )
    }, []);
    return (
        <div className='header' id='header'>
            <div className='container'>
                <div className='left'>
                    {data.left && data.left.map(node => {
                        console.log(node.label)
                        if (node.viewType === 'anchor') return Button(node)
                        else if (node.viewType === 'dropdown') return Dropdown_function(node)
                        else if (node.viewType === 'image') return Image(node)
                        //else return (<></>)
                        else return addFile(node, 'header')
                    })}
                </div>
                <div className='right'>
                    {data.right && data.right.map(node => {
                        console.log(node.label)
                        if (node.viewType === 'anchor') return Button(node)
                        else if (node.viewType === 'dropdown') return Dropdown_function(node)
                        else if (node.viewType === 'image') return Image(node)
                        else if(node.viewType === 'search') return SearchBox(node)
                        else return addFile(node, 'header')
                    })}
                </div>
            </div>
        </div>
    )
}

function Image(data) {
    return (
        <div className='colWithImage'>
            <img src={`${data.image}`} alt={data.label} height={'40px'}></img>
        </div>
    )
}

function Button(data) {
    return (
        <div className='col header-div'>
            <a href={`${data.url}`}>{data.label}</a>
        </div>
    )
}

function Dropdown_function(data) {
    return (
        <div className='col header-div'>
            <span className='dropdownBtn left'>{data.label}
                <ul className='dropdown'>
                    {/* <Dropdown list={data.child} header={data.label} /> */}
                </ul>
            </span>
        </div>
    )
}

function SearchBox(node){
    return(
        <div className='col header-div'>
            <input type='text' onKeyUp={e=>{handleValueChange(e)}} id='search' class='border-decor' placeholder='SEARCH'/>
        </div>
    )
}