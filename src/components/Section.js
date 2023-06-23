import React from 'react'
import './Section.css'
import ItemText from './ItemText'
import Buttons from './Buttons'

function Section() {
  return (
    <div className='Section'>
      <ItemText />
      <Buttons />
      {/* <DownArrow src='public/images/down-arrow.svg' /> */}
    </div>
  )
}


export default Section
