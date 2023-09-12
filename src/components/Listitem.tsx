import React from 'react'
import "../styless/Listitem.css"

interface IListitemProps{
    name:string
   
}
export const Listitem = ({name}:IListitemProps) => {
  return (
    <div className='Listitems'>

<h5>{name}</h5>
    </div>
  )
}
export default Listitem;