import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div>
        <Link to={"/selection"} className='btn btn-success'>New Entry</Link>
      </div>
    </div>
  )
}

export default Home
