import Image from 'next/image'
import React from 'react'
import Solidity from '../public/assets/skills/solidity.png'
import Ethers from '../public/assets/skills/ethers.png'
import Hardhat from '../public/assets/skills/hardhat.png'
import JavaScript from '../public/assets/skills/javascript.png'
import NextJS from '../public/assets/skills/nextjs.png'
import ReactJS from '../public/assets/skills/react.png'
import NodeJS from '../public/assets/skills/nodejs.png'
import MongoDB from '../public/assets/skills/mongo.png'
import HTML from '../public/assets/skills/html.png'
import CSS from '../public/assets/skills/css.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 pt-36'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>My Tech Stack</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={Solidity} width="64px" height="64px" alt="/" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Solidity</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={Ethers} width="80px" height="64px" alt="/" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Ethers</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={Hardhat} width="80px" height="64px" alt="/" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Hardhat</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={JavaScript} width="64px" height="64px" alt="/" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={NextJS} width="64px" height="64px" alt="/" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Next js</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={ReactJS} width="64px" height="64px" alt="/" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>React</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={NodeJS} width="120px" height="64px" alt="/" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Node js</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={MongoDB} width="64px" height="64px" alt="/" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={HTML} width="64px" height="64px" alt="/" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={CSS} width="64px" height="64px" alt="/" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills