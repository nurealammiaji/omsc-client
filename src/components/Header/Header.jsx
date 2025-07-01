import React from 'react'
import { Link } from 'react-router-dom'
import logo from "/logo.png"

const Header = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-5'>
                <figure className='w-10'>
                    <img src={logo} alt="" />
                </figure>
                <Link to={"/"} className='font-bold text-2xl hover:text-primary'>Oxford Modern School & College</Link>
            </div>
            <br />
            <div className='divider w-[30%] mx-auto'>
                <h4 className='font-semibold text-lg'>Offline Diary</h4>
            </div>
        </div>
    )
}

export default Header