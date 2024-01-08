import React from 'react'
import './ThirdPage.css'
import nfdlogo from '../images/nfdlogo2.png'
const ThirdPage = () => {
  return (
    <div className='thirdpage-container'>
        <span id='gotome'>We work to make your life easier</span>
        <div className='solutiondiv'>
        <h2>Solution</h2>
        <p>NFD.gg heralds a new era in alpha communities, one where they have their own platform, which structures and condenses relevant information on all these alpha activities, where our team monitors any updates on these activities 24/7. No more reading 2000+ discord messages a day and tracking twitter day in, day out. Everything you ever need to know can be found on NFD.gg.</p>
        </div>
        
        <div className='solutionlogodiv'>
            <div className='image-nfd-logo-div'>
            <img src={nfdlogo} alt="" />
            </div>
            <p>NFD will save you time and help you earn money in crypto.</p>
        </div>

    </div>
  )
}

export default ThirdPage