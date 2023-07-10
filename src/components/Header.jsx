import React from 'react'

export const Header = (props) => {
    console.log(props)
  return (
    
    <>
    <div>
    <h2 >Ahmad's <span style={{color:'red'}}>{props.title}</span></h2>
    </div>
    </>
  )
}
