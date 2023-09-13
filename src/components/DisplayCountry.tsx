import React, { useRef, useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import Listitem from './Listitem';
import "./DisplayCountry.css"
import { Grouplist } from './Grouplist';
import IGetCountries from "./Modals"
export const DisplayCountry = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [countryList, setcountryList] = useState<IGetCountries[] | undefined>()
  const [searchTerm, setsearchTerm] = useState<string | undefined>("")
  const [groupsize,setGroupSize]=useState<number>(1)
  const[grouplist,setGroupList]=useState<IGetCountries[]|undefined>()
  
  const GET_COUNTRIES = gql`
    query getcountry{
      countries{
        name
        code
      }
    }`
  const {  data } = useQuery(GET_COUNTRIES);
//loading, error,

  

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const current = e.target?.value
    if(current?.includes("group:")){
      const tokens=current.split("group:")
      const sizestring=tokens[tokens.length-1]
      const size=parseInt(sizestring);
      if(size>0){
       setGroupSize(size)
      }
    }
   

    if(current?.includes("search:")){
      const tokens=current.split("search:")
      const searchtermlength=tokens[tokens.length-1]
      let searchtermend=searchtermlength.split(" ")
      const searchtermtext=searchtermend[0];     
       setsearchTerm(searchtermtext)
    }
    
    else if (!current?.includes("group:")){
      setsearchTerm(current)
    }
  }


  useEffect(() => {

    let countryData: IGetCountries[] = data?.countries
    if (countryData && searchTerm) {
      countryData = countryData.filter((item) => item.name.includes(searchTerm))
    }
    setcountryList(countryData)
    console.log(countryList)
  }, [data, searchTerm])
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;
  
  return (
    <div  className='displaycountry'>
      <input onChange={handleChange} ref={inputRef} className="filterinput" />
      <div className='countries'>
        
        {countryList&&<Grouplist countryListed={countryList}></Grouplist>}
       
      </div>
    </div>
  )
}
export default DisplayCountry;




