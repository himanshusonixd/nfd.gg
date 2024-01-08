import React from 'react'
import './FourthPage.css'

const FourthPage = () => {
    return (
        <div className='fourthpagecontainer'>


            <div className='fourthpage'>

                <div className='fourthImagediv'>
                    <img src="https://www.nfd.gg/aggregator/AggContentOPT.webp" alt="" />

                </div>
                <div className='fourthpageText'>
                    <div className='cryptodiv'>
                        FIRST WEB3 CRYPTO
                    </div>
                    <h2>Keeping track of projects in <span>one place</span></h2>
                    <p>The NFD.gg aggregator allows you to create a specific card of any project and parse any type of information from Discord, Twitter, Dune Analytics, TradingView, Github etc. into your own dashboard.</p>

                    <button>Start Creating</button>
                </div>
            </div>

            <div className='alphapage'>
                <h2>Find alpha before anyone else with us</h2>
                <div className='alphabtns'>
                <div>Add a list of top Twitter accounts</div>
                <div>Follow their new subscriptions.</div>
                <div>We'll show you matches on those subscriptions.</div>
                </div>
                <div className='fourthsecondimg'>

                
                <img src="https://www.nfd.gg/alphatool/1OPT.webp" alt="" />
                <div className='alphaUpdiv'>
                    <div className='alphaUpdiv-first'>
                    <h3>Finding Alpha is easy</h3>
                    <p>Alpha search tool will let you be one of the first people to find the most promising alpha by tracking influencers and the most hyped projects.</p>
                    </div>
                    <div className='alphaUpdiv-second'>
                        <button>Try now for free</button>
                        <button>Follow on twitter</button>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default FourthPage