import React, { useEffect, useState } from "react";
import './filter.scss'
import axios from 'axios';
import { Cards } from "./cards";



export const Filter = () => {

  const [staff, setStaff]= useState([]);
  const [student, setStudent]= useState([]);
  const [click, setClick] = useState(0);

  useEffect(()=>{
    fnFilterStaff()
    .then(doc=>{
      const filterSaff = doc.filter((staff)=>{return staff.hogwartsStaff===true})
      setStaff(filterSaff)

      const filterStudent = doc.filter((student)=>{return student.hogwartsStudent===true})
      setStudent(filterStudent )})
  },[])

    async function fnFilterStaff (){
      try{
        let respons= await axios.get(`./data/hp-characters.json`);
        let data = respons.data;
        const document = [];
         data.forEach((character) => {
        document.push({
                       'name':character.name, 
                       'dateOfBirth':character.dateOfBirth, 
                       'gender':character.gender, 
                       'eyeColour':character.eyeColour, 
                       'hairColour':character.hairColour, 
                       'house':character.house, 
                       'image':character.image,
                       'hogwartsStaff':character.hogwartsStaff,
                       'hogwartsStudent':character.hogwartsStudent,
                       'alive':character.alive
                       
        });
        });
        
        return document
      }
      catch(error){
        return (error);
      }
    }

    
    return(
        <>
          <section className="flex-filter">
              <button 
                   className="btn-filter"
                   onClick={() => {setClick(1);}}> Staff
              </button>
              <button 
                  className="btn-filter" 
                  onClick={() => {setClick(2);}}>Estudiante
              </button>

          </section>
           <section>
                  {click===1 ? 
                  <Cards
                    list={staff}
                  />
                  : <Cards
                  list={student}
                /> }
                   
          </section>
        </>
    )
}