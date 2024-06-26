import React from 'react'

const Button = ({text}) => (
    <button className='bg-main rounded-[50px] shadow-[0px_0px_25px_0px_rgba(255,75,51,0.5)] m-5 hover:scale-105 transition ease-out duration-300'>
        <p className='font-montseratt text-[20px] font-semibold text-white p-6 px-8'>{text}</p>
    </button>
)

export default Button