import './index.css'

const PlanetItem = props => {
  const {slideDetails} = props
  const {name, imageUrl, description} = slideDetails
  return (
    <div className="container">
      <img src={imageUrl} alt={name} className="img" />
      <h1 className="heading">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItem
