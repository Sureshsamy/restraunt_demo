
const Rescard = ({ resname, image, ratings, place }) => {
  return (
    <div className='res_card'>
      <div className='res_img'><img src={image} alt="image" /></div>
      <h3>{resname}</h3>
      <p>{ratings}</p>
      <p>{place}</p>
    </div>
  )
}

export default Rescard;