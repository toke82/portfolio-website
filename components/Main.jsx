import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LETS BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I am <span className='text-[#5651e5]'>Adrián</span>
                </h1>
                <h1 className='py-4 text-gray-700'>
                    Blockchain Engineer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am a blockchain engineer specialized in solidity. Currently, I am focus on the
                    development of smart contracts, while learning web3 tecnologies.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main