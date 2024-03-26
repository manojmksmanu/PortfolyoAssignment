import React from 'react'
import UseContext from '../../Context/UseContext'
import './Hero.css'
const Hero = () => {
    const data= UseContext();
  return (
    <div className=''>
        <div className='hero_container'>
            {
                data && <img src={data.user.about.avatar.url}/>
            }
        </div>
    </div>
  )
}

export default Hero