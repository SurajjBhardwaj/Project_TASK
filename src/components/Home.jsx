import React from 'react'
import Features from './Features'


const Home = () => {
  return (
    <>
      <div className="h-full w-full absolute">
        <div className="content">
          <h1 className='m-12 md:m-20 my-44 md:my-64 text-2xl   md:text-5xl font-medium text-violet-600' >Get the best job with Us</h1>
          <div className="flex">
          <button className='absolute -my-36 mx-12 w-28 h-10 bg-violet-500 text-white'>Login</button>
          <button className='btn-2 absolute text-violet-600 -my-36 mx-44  w-28 h-10 '>Register</button>
          </div>
        </div>
      </div>
      <Features/>

    </>
  )
}

export default Home