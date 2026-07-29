import React from 'react'
import Paper from '../../widgets/login-form/Form'
import ColorBends from '../../shared/ui/background/ColorBends'

export default function Registration() {
  return (
    <>
      <div>
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
        <Paper />
      </div>
    </>
  )
}
