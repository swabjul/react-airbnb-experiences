export default function Card(props) {

  console.log(  props.item.id)


  return (
    <div className="card">
      <img className="card--photo" src={`./images/${props.item.coverImg}`} alt="" />
      <div className="card--stats">
        <img className="card--star" src="./images/star.png"  alt="star-icon"/ >
        <span className="card--rating">{props.item.stats.rating}</span>
        <span className="card--count">({props.item.stats.reviewCount}) ‧</span>
        <span className="card--location">{props.item.location}</span>
      </div>
      <h2 className="card--title">{props.item.title}</h2>
      <p className="card--price"><strong>From ${props.item.price}</strong> / person</p>
    </div>
  )
}