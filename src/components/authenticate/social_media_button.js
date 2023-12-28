import React from 'react';
import "../../assets/styles/social_media_button.css"

const SocialMedia = ({ img, txt, href }) => {
    const inputStyle = {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `20px center`
      };
  return (
    <div className='social_media'>
     <a href={href}> <button className='social_media_button' style={inputStyle}>{txt}</button></a>
    </div>
  );
};

export default SocialMedia;