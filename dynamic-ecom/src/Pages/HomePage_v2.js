import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function HomePageV2(){
    return(
        <div className="body-v2">
            {<Sidebar className='sidebar' style={st.left}/>}
            <div className="body-v2-content" style={st.right}>
                <button>Click Me</button>
            </div>
        </div>
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