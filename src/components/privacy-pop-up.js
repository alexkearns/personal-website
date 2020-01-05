import React, { useState } from 'react';

const PrivacyPopup = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  
  const initial = (window.localStorage.getItem('hide_privacy') !== 'yes');
  const [show, setShow] = useState(initial);

  const hide = () => {
    window.localStorage.setItem('hide_privacy', 'yes');
    setShow(false)
  };

  if (! show) {
    return null;
  }

  return (
    <div className="bg-gray-800 w-full px-3 py-2 fixed left-0 bottom-0 text-gray-400 flex justify-between items-center">
      <div className='pr-3 text-xs'>
        By using this site, you agree to have anonymous data collected for analytics purposes.
      </div>
      <div className='font-bold cursor-pointer' onClick={hide}>
        &times;
      </div>
    </div>
  )
};

export default PrivacyPopup
