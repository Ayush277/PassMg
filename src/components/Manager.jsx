import { Container } from 'postcss'
import React from 'react'

const Manager = () => {
    return (
        <>
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

        <div className="mycontainer bg-green-100">
            <h1 className='text-4xl text font-bold text-center'>
                <span className='text-green-600'>&lt;</span>
                <span>Pass</span><span className='text-green-600'>MG</span><span className='text-green-600'>&gt;</span>
            </h1>
            <p className='text-green-600 text-center'>Your EZ Password Manager</p>

            <div className="text-white flex flex-col p-4">
                
                <input className='rounded-full border border-green-500 w-full text-black px-4 py-1' type="text" name='' id='' />
                <div className="flex">
                    <input type="text"/>
                    <input type="text"/>
                </div>
                </div>

        </div>

        </>
    )
}

export default Manager
