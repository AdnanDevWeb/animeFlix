import { useState } from 'react'
import Navbar from './assets/components/navbar'
import './App.css'

// component
import Popular from './assets/components/popular'
import Action from './assets/components/action'
import Darama from './assets/components/drama'
import Fantasy from './assets/components/fantasy'
import Horror from './assets/components/horror'
import Romance from './assets/components/romance'
import Supernaturel from './assets/components/supernaturel'
import Psychological from './assets/components/psychological'


function App() {

  return (
    <>
      <Navbar/>
      {/* <Popular/>
      <Action />
      <Darama />
      <Fantasy />
      <Horror />
      <Romance />
      <Supernaturel />
      <Psychological /> */}
    </>
      
  )
}

export default App
