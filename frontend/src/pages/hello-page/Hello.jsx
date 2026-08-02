import React from 'react'
import Header from '../../widgets/header/Header.jsx'
import ColorBends from '../../shared/ui/background/ColorBends.jsx'
import MainInfo from '../../widgets/main-info/Main-Info.jsx'
import Picture from '../../widgets/picture-block/Picture-block.jsx';

export default function Hello() {
  return (
    <>
    <div className="page-wrapper">
      <ColorBends
        colors={["#ff5c7a", "#8a5cff"]}
        rotation={90}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        noise={0.15}
        parallax={0.5}
        iterations={1}
        intensity={1.5}
        bandWidth={6}
        transparent
        autoRotate={0}
        color="#A855F7"
      />
      <Header />
      <MainInfo />
      <Picture />
    </div>
    </>
  )
}
