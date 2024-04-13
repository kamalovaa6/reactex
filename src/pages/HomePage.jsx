import { useState } from 'react'
import Slider from '../Components/Slider/Slider'
import Products from '../Components/Product/Product'
import Popular from '../Components/Popular/Popular'

function HomePage() {
  return (
    <>
      <Slider></Slider>
      <Popular></Popular>
        <Products></Products>
    </>
  )
}

export default HomePage
