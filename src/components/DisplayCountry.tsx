import React from 'react'
import {useQuery, gql} from '@apollo/client';
import Listitem from './Listitem';
import "./DisplayCountry.css"
export const DisplayCountry = () => {
   
    const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
     
      
    }
  }
`;

const { loading, error, data } = useQuery(GET_COUNTRIES);

interface IGET_COUNTRIES{
name:string
__typename:string
   
    
    
}
if (loading) return <p>Loading...</p>;
if (error) return <p>Error : {error.message}</p>;

const countryData:IGET_COUNTRIES[]= data.countries;
  return (
    <div  className="countries">
    {countryData.map((country,index)=>(
        <Listitem key={index} name={country.name}></Listitem>
    ))}
        
      </div>
  )
}
export default DisplayCountry;




 