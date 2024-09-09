import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { menuItems } from './data/data';

const App = () => {
  const [data, setData] = useState(menuItems);
  return (
    <div>
      <Navbar setData={setData} data={data} />
      <HeroSection data={data} />
    </div>
  )
}

export default App
