import React from 'react';

function Spinner() {
  return (
    <div className='fixed top-0 left-0 w-full flex justify-center items-center h-screen'>
      <div className='absolute animate-ping w-16 h-16 rounded-full bg-sky-600'></div>
    </div>
  )
}
export default Spinner;