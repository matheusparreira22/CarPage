import React from 'react'
import AboutSection from '../components/AboutSection'
import Carrosel from '../components/carrosel'
import Video from '../components/Video'
import Frase from '../components/Frase'
import Galery from '../components/Galery'
import Input from '../components/Input'

export default function Home() {
  return (
    <div>
      <AboutSection></AboutSection>
      <Carrosel/>
      <Frase/>
      <Galery/>
      <Video/>
      <Input/>
    </div>
  )
}
