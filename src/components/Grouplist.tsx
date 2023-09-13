import React, { useEffect, useState } from 'react'
import IGetCountries from './Modals'
import Listitem from './Listitem'
import { JsxElement } from 'typescript'
import {IListitemProps} from "./Listitem"
interface IGroupList {
    countryListed: IGetCountries[]
}

export const Grouplist = ({ countryListed }: IGroupList) => {

    
    const [list,setList]=useState<IListitemProps[]|undefined>();
    useEffect(() => {
       filteredlist(countryListed);
       
      },[countryListed]);

    let filteredlist = (countryListed:IGetCountries[]) => {
        const length=countryListed.length
        let listitemarray:IListitemProps[]=[]
        if(length>10){
           countryListed.forEach((country, index) => listitemarray?.push({name:country.name , ids:index,selected:index===10}))
        }
        else{
            countryListed.forEach((country, index) => listitemarray?.push({name:country.name , ids:index,selected:index===(length-1)}))
            debugger;
        }
       
     setList(listitemarray);
    

    }

    return (

        <div>

            {list&&list?.map(props=>(<Listitem {...props}></Listitem>))}
        </div>
    )
}

