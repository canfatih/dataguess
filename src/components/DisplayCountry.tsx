import { useRef, useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import Listitem from './Listitem';
import "./DisplayCountry.css"
export const DisplayCountry = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [countryList, setcountryList] = useState<IGetCountries[] | undefined>()
  const [searchTerm, setsearchTerm] = useState<string | undefined>("")
  const GET_COUNTRIES = gql`
    query getcountry{
      countries{
        name
        code
      }
    }`
  const {  data } = useQuery(GET_COUNTRIES);
//loading, error,

  interface IGetCountries {
    name: string
  }



  const handleChange = () => {

    const current = inputRef.current?.value
    setsearchTerm(current)
  }

  useEffect(() => {

    let countryData: IGetCountries[] = data?.countries
    if (countryData && searchTerm) {
      countryData = countryData.filter((item) => item.name.includes(searchTerm))
    }
    setcountryList(countryData)
  }, [data, searchTerm])
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;
  return (
    <div  className='displaycountry'>
      <input onChange={handleChange} ref={inputRef} className="filterinput" />
      <div className='countries'>
        {countryList?.map((country, index) => (
          <Listitem key={index} name={country.name}></Listitem>
        ))}
      </div>
    </div>
  )
}
export default DisplayCountry;




