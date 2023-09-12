import React, { useRef,ChangeEvent, useEffect, useState } from 'react'
import {useQuery, gql} from '@apollo/client';
import Listitem from './Listitem';
import "./DisplayCountry.css"
export const DisplayCountry = () => {
  const inputRef=useRef<HTMLInputElement>(null);
  const [countryList,setcountryList]=useState<IGET_COUNTRIES[]|undefined>()
  const[searchTerm,setsearchTerm]=useState<string|undefined>("")
   let deneme:string="BR"
    const GET_COUNTRIES = gql`
    query getcountry{
      countries{
        name
        code
      }
    }`
    const get_codes = gql`
    query getcountry{
      country(code:${deneme}){
        name
      }
    }`

const { loading, error, data } = useQuery(GET_COUNTRIES);

interface IGET_COUNTRIES{
name:string
}



const handleChange=()=>{

  const current=inputRef.current?.value
setsearchTerm(current)
}

useEffect(()=>{
 
  let countryData:IGET_COUNTRIES[]= data?.countries
if(countryData&&searchTerm){
  
  countryData=countryData.filter((item)=>item.name.includes(searchTerm))


}
setcountryList(countryData)
},[data,searchTerm])
// if (loading) return <p>Loading...</p>;
// if (error) return <p>Error : {error.message}</p>;
  return (
    <div  className="countries">
      <input onChange={handleChange} ref={inputRef} className="filterlist" />
    {countryList?.map((country,index)=>(
        <Listitem key={index} name={country.name}></Listitem>
    ))}
        
      </div>
  )
}
export default DisplayCountry;




 