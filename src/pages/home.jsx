import React from 'react'
import AboutSection from '../components/AboutSection'
import Carrosel from '../components/carrosel'
import Video from '../components/Video'

export default function Home() {
  return (
    <div>
      <AboutSection></AboutSection>
      <Carrosel/>
      <Video/>
    </div>
  )
}
