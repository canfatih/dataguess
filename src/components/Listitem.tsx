import React, { useState } from 'react'
import "../styless/Listitem.css"

export interface IListitemProps {
  name: string
  ids: number

  selected?: boolean
}

export const Listitem = ({ name, ids, selected }: IListitemProps) => {

  const [selecteditem, setSelectedItem] = useState(selected)

let selectitem = () => {

    if (ids % 3 === 1) {

      if (selecteditem) {

        return "green"
      }
      else {
        return "white"
      }
    }
    else if (ids % 3 === 0) {
      if (selecteditem) {
        return "blue"
      }
      else {
        return "white"
      }
    }
    else {
      if (selecteditem) {
        return "purple"
      }
      else {
        return "white"
      }
    }

  }


  return (
    <div onClick={() => (
      setSelectedItem(!selecteditem)
    )} className="Listitems" style={{ backgroundColor: selectitem() }}>

      <h5>{name}</h5>
    </div>
  )
}
export default Listitem;