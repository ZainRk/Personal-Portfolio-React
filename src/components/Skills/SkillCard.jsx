import React from 'react'
import './Skills.css'

function SkillCard({url,text}) {
    
  return (
    <div className='styled-Div'>
        <img src={url} alt="" style={{width:"75px",height:"75px"}}/>
        <span>{text}</span>
    </div>
  )
}

export default SkillCard