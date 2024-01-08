import React from 'react'
import './SecondPage.css'
const SecondPage = () => {
  return (
    <div className='secondpage-container'>
        <div className='para-div'>
            <span>The first web3 crypto platform</span>
            <br />
            <h2>Problem</h2>
            <p>Today, even in alpha communities, there's an enormous volume of information that members have to wade through for 6-8+ hours a day. Cutting through the noise of spam is a real problem even where there's something genuinely worth knowing.</p>
        </div>
        <div className='videodiv'>
            <video muted loop autoPlay src="https://www.nfd.gg/outtest_f19ifs.webm"></video>

        </div>
    </div>
  )
}

export default SecondPage