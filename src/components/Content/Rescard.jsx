

const Rescard = ({resname, image, ratings}) =>{
    return(
      <div className='res_card'>
        <div className='res_img'><img src={image} alt="image" /></div>      
        <h3>{resname}</h3>
        <p>{ratings}</p>
        <p>Parasias road</p>
      </div>
    )
  }

  export default Rescard;