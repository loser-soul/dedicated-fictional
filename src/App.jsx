import './App.css'
import { useEffect, useState } from 'react'
import FinalReveal from './components/FinalReveal'

function App() {

  const [text, setText] = useState("Initializing...")
  const [desc, setDesc] = useState("Connecting AI nodes...")
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [finalReveal, setFinalReveal] = useState(false)

  useEffect(() => {

    async function runSequence(){

      await delay(1200)

      setText("Nice to see you here.")
      setDesc("Welcome to Nova Intelligence.")

      await delay(2200)

      setText("We found something for you.")
      setDesc("Generating personalized results.")

      await delay(2200)

      setText("Please wait...")
      setDesc("Advanced AI processing started.")

      await delay(1500)

      setLoading(true)

      for(let i=0;i<=100;i++){

        setProgress(i)

        await delay(40)

      }

      await delay(700)

      setFinalReveal(true)

    }

    runSequence()

  }, [])

  function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  return (

    <>

      {
        !finalReveal ? (

          <div className="app">

            {/* Glow */}

            <div className="bg1"></div>
            <div className="bg2"></div>

            {/* Main Window */}

            <div className="window">

              {/* Navbar */}

              <nav>

                <div className="logo">

                  <div className="logo-box">
                    N
                  </div>

                  <span>
                    Nova Intelligence
                  </span>

                </div>

                <div className="links">

                  <span>Dashboard</span>
                  <span>Analytics</span>
                  <span>Research</span>
                  <span>Labs</span>

                </div>

              </nav>

              {/* Main */}

              <main>

                <div className="badge">
                  AI SYSTEM ACTIVE
                </div>

                <div className="hero-text">

                  <h1>
                    {text}
                  </h1>

                </div>

                <p className="main-desc">
                  {desc}
                </p>

                {
                  loading && (

                    <div className="loader-card">

                      <div className="loader-top">

                        <span>
                          Generating Results
                        </span>

                        <span>
                          {progress}%
                        </span>

                      </div>

                      <div className="bar">

                        <div
                          className="fill"
                          style={{width:`${progress}%`}}
                        >
                        </div>

                      </div>

                      <div className="loading-status">

                        Neural synchronization in progress...

                      </div>

                    </div>

                  )
                }

              </main>

            </div>

          </div>

        ) : (

          <FinalReveal />

        )
      }

    </>

  )
}

export default App