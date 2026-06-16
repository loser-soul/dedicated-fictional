import './FinalReveal.css'
import { useEffect, useRef } from 'react'

function FinalReveal() {

  const audioRef = useRef(null)

  useEffect(() => {

    if(audioRef.current){

      audioRef.current.volume = 1

      audioRef.current.play()

    }

  }, [])

  return (

    <div className="reveal-container">

      {/* AUDIO */}

      <audio
        ref={audioRef}
        src="/prank.mp3"
      />

      {/* IMAGE */}

      <img
        src="/prank.gif"
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
