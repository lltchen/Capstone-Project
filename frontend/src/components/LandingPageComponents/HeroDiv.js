import React from 'react';

import { Fade } from 'react-slideshow-image';

const fadeImages = [
  require('../../images/1394163559000-NYC-Jails-Violence.jpg'),
  require('../../images/GettyImages_512182646.0.jpg'),
  require('../../images/IMG_0877-771x434.jpg'),
  require('../../images/IMG_1560_cc.jpg'),
  require('../../images/IMG_1610_cc-1280x720.jpg'),
  require('../../images/IMG_1856_cc.jpg'),
  require('../../images/IMG_1877_cc.jpg'),
  require('../../images/IMG_1952_cc.jpg'),
  require('../../images/psycho-killer-spree-of-terror-rikers.jpg'),
  require('../../images/rikers-spot1.jpg'),

];

const fadeProperties = {
  duration: 9000,
  transitionDuration: 900,
  infinite: true,
  indicators: false,
  arrows: false
}



export const Slideshow = () => {
    return (
      <Fade {...fadeProperties}>
     <div className="each-fade">
       <div className="image-container">
         <img height="1080px" width="100vw" src={fadeImages[0]} />
       </div>
     </div>
     <div className="each-fade">
       <div className="image-container">
         <img height="1080px" width="100vw" src={fadeImages[1]} />
       </div>
     </div>
     <div className="each-fade">
       <div className="image-container">
         <img height="1080px" width="100vw" src={fadeImages[2]} />
       </div>
     </div>
     <div className="each-fade">
       <div className="image-container">
         <img height="1080px" width="100vw" src={fadeImages[3]} />
       </div>

     </div>
     <div className="each-fade">
       <div className="image-container">
         <img height="1080px" width="100vw" src={fadeImages[4]} />
       </div>

     </div>
     <div className="each-fade">
       <div className="image-container">
         <img height="1080px" width="100vw" src={fadeImages[5]} />
       </div>

     </div>
     <div className="each-fade">
       <div className="image-container">
         <img height="1080px" width="100vw" src={fadeImages[6]} />
       </div>

     </div>
     <div className="each-fade">
       <div className="image-container">
         <img height="1080px" width="100vw" src={fadeImages[7]} />
       </div>

     </div>
     <div className="each-fade">
       <div className="image-container">
         <img height="1080px" width="100vw" src={fadeImages[8]} />
       </div>

     </div>
     <div className="each-fade">
       <div className="image-container">
         <img height="1080px" width="100vw" src={fadeImages[9]} />
       </div>

     </div>
   </Fade>
    )
}
