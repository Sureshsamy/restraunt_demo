import Rescard from "./Rescard";
import { resdetails } from "../../utils/Mockdata";
import { useState } from "react";

const Rescontainer = ()=>{

  const [details, setDetails] = useState(resdetails) 

  let resdet = resdetails

    return(
      <div className='res_container'>

        <div className="filter">
        <button onClick={() =>{
          setDetails(resdet)
        }}>ALL</button>

        <button onClick={() =>{
            resdet = resdet.filter((res) => res.ratings<4)
            setDetails(resdet)
          }}>Less rated</button>

        <button onClick={() =>{
            resdet = resdet.filter((res) => res.ratings>=4.5)
            setDetails(resdet)
          }}>Average</button>

          <button onClick={()=>{
            resdet = resdet.filter((res) => res.ratings===5)
            setDetails(resdet)
          }}>Top rated</button>
        </div>
        <div className="res_card_container">
        {
          details.map((card, index)=>{
            return(
              <Rescard key={index} resname={card.name} image={card.image} ratings={card.ratings} place={card.place}/>
            )
          })
        }
        </div>
      </div>
    )
}

export default Rescontainer;