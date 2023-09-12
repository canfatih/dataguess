import React from 'react'
import "../styless/Listitem.css"

interface ListitemProps{
    name:string
   
}
export const Listitem = ({name}:ListitemProps) => {
  return (
    <div className='Listitems'>

<h5>{name}</h5>
    </div>
  )
}
export default Listitem;