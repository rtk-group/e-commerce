import React from 'react'
import Hero from '../Component/Hero'
import Latestcollection from '../Component/Latestcollection'
import Bestsaller from '../Component/Bestsaller'
import Ourpolicy from '../Component/Ourpolicy'
import Newslatterbox from '../Component/Newslatterbox'

const Home = () => {
  return (
    <>
      <Hero />
      <Latestcollection />
      <Bestsaller />
      <Ourpolicy />
      <Newslatterbox />
    </>
  )
}

export default Home