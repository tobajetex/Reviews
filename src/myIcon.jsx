import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons'

function MyIcon({ handleNextCard, handlePreviousCard, RandomCardGenerator }) {
  return (
    <div class="card-footer">
      <div class="social-icons">
        <FontAwesomeIcon icon={faFacebook} className="icon" />
        <FontAwesomeIcon icon={faTwitter} className="icon" />
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </div>
      <button class="button" onClick={RandomCardGenerator}>
        pic at random
      </button>
      <div className="social-icons ">
        <div className="icon-cover" onClick={handlePreviousCard}>
          <FontAwesomeIcon icon={faLessThan} />
        </div>
        <div className="icon-cover" onClick={handleNextCard}>
          <FontAwesomeIcon icon={faGreaterThan} />
        </div>
      </div>
    </div>
  )
}

export default MyIcon
