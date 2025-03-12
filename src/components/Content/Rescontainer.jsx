import Rescard from "./Rescard";
import { resdetails } from "../../utils/Mockdata";

const Rescontainer = ()=>{
    return(
      <div className='res_container'>
        {
          resdetails.map((card, index)=>{
            return(
              <Rescard key={index} resname={card.name} image={card.image} ratings={card.ratings}/>
            )
          })
        }
      </div>
    )
}

export default Rescontainer;