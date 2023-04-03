import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import AboutImg from "../public/assets/avataaars.png"

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                +8 years experience as a Software Engineer. 
                I am driven by my passion for web3. 
                I chose to attend university to fully immerse myself in the world of web3 and blockchain development, where I have completed a masters degree in blockchain technologies. 
                In addition to knowing solidity, I try to be updated with the latest tools for developers, as well as vulnerabilities and attacks in smart contracts.                    
                </p>
                <p className='py-2 text-gray-600'>
                I am looking to collaborate on projects with blockchain technology as Solidity Developer.                  
                </p>
                <p className='py-2 text-gray-600'>
                Technical Background
                - Smart Contract Development, Solidity Design Patterns Implementations, ERC721, ERC20, Upgradeable Smart Contracts, IPFS.                    
                </p>
                <Link href='/#projects'>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
                </Link>
                
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={AboutImg} className='rounded-xl bg-white' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About