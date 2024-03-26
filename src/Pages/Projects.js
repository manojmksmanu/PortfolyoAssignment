import React,{useEffect, useState} from 'react'
import UseContext from '../Context/UseContext'
import Card from '../Components/ProjectCard/Card';
import './Pages.css'
const Projects = () => {
    const data = UseContext();
    // for modal
    
    // console.log(data.user.projects)
//     const [product ,setProduct]=useState("")
//     useEffect(()=>{
// data && data.user.projects.sort
//     },[])
    return (
        <div className='projects'>
           <h1>projects</h1>
            <div className='projects_cards_container scroll_setting'>
                {
                    data && data.user.projects.map((e) => {
                    return    <Card img={e.image.url} cardData={e} />
                    })
                
                }
             
            </div>

        </div>
    )
}

export default Projects