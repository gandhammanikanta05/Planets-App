import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const {planetsList} = props
  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachSlide => (
          <PlanetItem key={eachSlide.id} slideDetails={eachSlide} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
