import React,{useEffect,useState} from 'react'
import { addFile } from '../../Helper/Files';

export default function Header(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData([
            {
                name:'Check anchor',
                url:'/check',
                viewType:'anchor'
            },
            {
                name:'Image',
                image:'/logo',
                viewType:'image'
            },
            {
                file:true,
                name:null,
                fileType:'css',
                fileName:'12345ASDF',
                viewType:null
            }
        ])
    }, []);
    return (
        <div className='header'>
            <div className='container'>
                <p>Header will come here</p>
                {
                    data.map(node => {
                        if(node.viewType === 'anchor'){
                            return <a href={node.url}>node.name</a>
                        }
                        else if(node.viewType === 'dropdown'){
                            return <></>
                        }
                        else if(node.viewType === 'image'){
                            return <image href={node.image} alt={node.name}></image>
                        }
                        else if(node.file){
                            addFile(node)
                            return null
                        }
                        else return null
                    })
                }
            </div>
        </div>
    )
}