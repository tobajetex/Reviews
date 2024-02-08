import React, { useState } from 'react'
import reviews from './data'
import MyIcon from './myIcon'
import changeImage from './assets/profileImg.jpg'

function Card() {
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = reviews[index]
  const image1 = image || changeImage

  const handleNextCard = () => {
    setIndex((prevIndex) => Math.min(index + 1, reviews.length - 1))
  }

  const handlePreviousCard = () => {
    setIndex((prevIndex) => Math.max(index - 1, 0))
  }

  const RandomCardGenerator = () => {
    setIndex(Math.floor(Math.random() * 3))
  }
  return (
    <div key={id}>
      <div class="card">
        <div class="card-header">
          <img src={image1} alt="User Image" />
          <div class="card-title">{name}</div>
        </div>
        <div class="card-content">
          <h4>{job}</h4>
          <p>{text}</p>
        </div>
        <MyIcon
          handleNextCard={handleNextCard}
          handlePreviousCard={handlePreviousCard}
          RandomCardGenerator={RandomCardGenerator}
        />
      </div>
    </div>
  )
}

export default Card
