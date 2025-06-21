import React from 'react'

import logo from "/logo.png"
import RoutineSelectionForm from './../../../components/RoutineSelectionForm/RoutineSelectionForm';

const RoutineSelection = () => {
  return (
    <div>
      <div className='flex justify-center items-center gap-5'>
        <figure className='w-10'>
          <img src={logo} alt="" />
        </figure>
        <h3 className='font-bold text-2xl'>Oxford Modern School & College</h3>
      </div>
      <br />
      <div className='divider w-[30%] mx-auto'>
        <h4 className='font-semibold text-lg'>Offline Diary</h4>
      </div>
      <br />
      <RoutineSelectionForm />
    </div>
  )
}

export default RoutineSelection
