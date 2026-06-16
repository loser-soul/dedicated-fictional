import './FinalReveal.css'
import { useEffect, useRef } from 'react'

function FinalReveal() {

  const audioRef = useRef(null)

  useEffect(() => {

  const timer = setTimeout(() => {

    if(audioRef.current){

      audioRef.current.volume = 1

      audioRef.current.play()

    }

  }, 1200)

  return () => clearTimeout(timer)

}, [])

  return (

    <div className="reveal-container">

      {/* AUDIO */}

      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}prank.mp3`}
      />

      {/* IMAGE */}

      <img
        src={`${import.meta.env.BASE_URL}prank.gif`}
        alt="Prank"
        className="reveal-image"
      />

      {/* OVERLAY */}

      <div className="reveal-overlay">

        

        <h3>
          Wapis chala jaa BSDK!
        </h3>

      </div>

    </div>

  )
}

export default FinalReveal
