import React, { Fragment } from 'react'
import spinner from '/src/assets/spinner.gif';

const Spinner = () => 
    <div className='w-100 mt-20'>
      <img src={spinner} alt="Loading..." width={180} height={180} className='text-center mx-auto' />
    </div>

export default Spinner