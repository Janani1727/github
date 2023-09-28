import React from 'react'
import "../style/TopSection.css"

const TopSection = () => {

  return (

    <div className='topSection'>
   
      <div className='sub1'>
     <img className='img2' src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg" alt="#" />
     <div className='middle'>
        <div>
        <img src="https://github.githubassets.com/images/modules/site/universe/eyebrow-23@2x.png?width=44&format=webpll" alt="#" />   
        </div>
        <div className='two'>
       
        <p className='one'>Github Universe: Dive AI, Security, and Dev Ex</p>
        <p className='one1'>Get your tickets to join us on Nov 8-9</p>

         <div className='middle1'>
         <p className='h1one'> Let's build from here</p>
         <p className='h1two'>The AI powered Developer platform to build to scale, and deliver secure software.</p>
         </div>
     
        </div>
        
     </div>
     <img className='img3' src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp" alt="#" />
     </div>  

      <div className='symbol'>
        <div className='symbol1'>
      <p>&lt;</p>
      <p>&gt;</p>
        </div>

        <div className='symbol2'>
          <input type="text" placeholder='Email Address' />
          <button>Sign Up For Github</button>
          <div className='symbol2div'></div>
          <div className='symbol3div'>
            <p>Start a free enterprise Trial </p>
          </div>
        </div>
      </div>

      <div className='sub2'>
        <div className='line'></div>
        <div>
        <p>Trusted by the world’s leading organizations ↘︎</p>
        </div>
        <div className='lineimg'>
          <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg" alt="#" />
          <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg" alt="#" />
          <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg" alt="#" />
          <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg" alt="#" />
          <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg" alt="#" />
          <img src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg" alt="#" />
        </div>
      </div>

      <div className='symbol1'>
      <p style={{fontSize:"25px"}}>💼</p>
      <p className='symbol1p'>Productivity</p>
      </div>


      <div className='sub3'>
        <div className='line'>

        </div>
      </div>
    </div>
  )
}

export default TopSection