import React from 'react';
import "../../assets/styles/input.css"

const Input = ({ img, txt }) => {
  const inputStyle = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `20px center`
  };

  return (
    <div className='form_input_div'>
      <input className='form_input' type='text' placeholder={txt} style={inputStyle} />
    </div>
  );
};

export default Input;
