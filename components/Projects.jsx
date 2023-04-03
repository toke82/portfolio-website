import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import dexImg from '../public/assets/projects/dex.png'
import daoImg from '../public/assets/projects/dao.png'
import nftImg from '../public/assets/projects/nft.png'
import icoImg from '../public/assets/projects/ico.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Projects
            </p>
            <h2 className='py-4'>What I built</h2>
            <div className='grid md:grid-cols-2 gap-8'>


                <ProjectItem 
                    title='DEX' 
                    backgroundImg={dexImg}
                    tech= 'Decentralized Exchange'
                    projectUrl='/dex' 
                />

                <ProjectItem 
                    title='DAO' 
                    backgroundImg={daoImg}
                    tech= 'Dao Application' 
                    projectUrl='/dao' 
                />
                <ProjectItem 
                    title='NFT' 
                    backgroundImg={nftImg}
                    tech= 'Nft Collection' 
                    projectUrl='/nft' 
                />
                <ProjectItem 
                    title='ICO' 
                    backgroundImg={icoImg}
                    tech= 'Ico Application' 
                    projectUrl='/ico' 
                />
            </div>
        </div>
    </div>
  )
}

export default Projects