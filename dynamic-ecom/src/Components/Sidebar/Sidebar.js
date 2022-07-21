import React from "react";
import './Sidebar.css'

export default function Sidebar(){
    function changeRight(index){
        let component = document.getElementsByClassName('sidebar')[0]
        let buttons = component.getElementsByTagName('button')
        for(let i=0;i<buttons.length;i++){
            buttons[i].className = buttons[i].className.replace('btn-info','btn-light')
        }
        buttons[index].className = buttons[index].className.replace('btn-light','btn-info')
    }
    return(
        <div className="sidebar">
            <ul>
                <button href='#' onClick={()=>changeRight(0)} className='btn btn-light'>Header</button>
                <button href="#" onClick={()=>changeRight(1)} className='btn btn-light'>Footer</button>
            </ul>
        </div>
    )
}