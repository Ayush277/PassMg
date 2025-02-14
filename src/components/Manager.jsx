import { Container } from 'postcss'
import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute top-0 z-[-2] h-screen w-screen bg-[linear-gradient(120deg,#d4fc79_0%,#96e6a1_100%)]"
            ></div>

            <div className="mycontainer ">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-600'>&lt;</span>
                    <span>Pass</span><span className='text-green-600'>MG</span><span className='text-green-600'>&gt;</span>
                </h1>
                <p className='text-green-600 text-center'>Your EZ Password Manager</p>

                <div className="text-white flex flex-col p-4 gap-8 items-center">

                    <input className='rounded-full border border-green-500 w-full text-black p-4 py-1' type="text" name='' id='' />
                    <div className="flex">
                        <input className='rounded-full border border-green-500 w-full text-black p-4 py-1 ' type="text" name='' id='' />
                        <input className='rounded-full border border-green-500 w-full text-black p-4 py-1' type="text" name='' id='' />
                    </div>


                    <button className="flex justify-center items-center gap-3 bg-green-400 rounded-full px-2 py-2 w-fit">
                        <lord-icon
                            src="https://cdn.lordicon.com/exymduqj.json"
                            trigger="hover">
                        </lord-icon>
                        Add password</button>
                </div>
            </div>

        </>
    )
}

export default Manager
