import Image from 'next/image';
import React from 'react';
import dexImg from '../public/assets/projects/dao.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const dao = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={dexImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Dao Application</h2>
          <h3>Solidity / Ethers JS / Hardhat / React JS / Next JS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Building our DAO. You want to launch a DAO for holders of your CryptoDevs NFTs. From the ETH that was gained through the ICO, you built up a DAO Treasury. The DAO now has a lot of ETH, but currently does nothing with it.
            You want to allow your NFT holders to create and vote on proposals to use that ETH for purchasing other NFTs from an NFT marketplace, and speculate on price. Maybe in the future when you sell the NFT back, you split the profits among all members of the DAO.
          </p>
          <p>
            The requirements:
          </p>
          <ul class='list-disc list-inside'>
            <li>Anyone with a CryptoDevs NFT can create a proposal to purchase a different NFT from an NFT marketplace.</li>
            <li>Everyone with a CryptoDevs NFT can vote for or against the active proposals.</li>
            <li>Each NFT counts as one vote for each proposal.</li>
            <li>Voter cannot vote multiple times on the same proposal with the same NFT.</li>
            <li>If majority of the voters vote for the proposal by the deadline, the NFT purchase is automatically executed.</li>
          </ul>
          <p>
            What we will make
          </p>
          <ul class='list-disc list-inside'>
            <li>To be able to purchase NFTs automatically when a proposal is passed, you need an on-chain NFT marketplace that you can call a purchase() function on. There exist a lot of NFT marketplaces out there, but to avoid overcomplicating things, we will create a simplified fake NFT marketplace for this tutorial as the focus is on the DAO.</li>
            <li>We will also make the actual DAO smart contract using Hardhat.</li>
            <li>We will make the website using Next.js to allow users to create and vote on proposals.</li>
          </ul>
          <p>
            Prerequisites:
          </p>
          <ul class='list-disc list-inside'>
            <li>You have completed the NFT Collection tutorial from earlier.</li>
            <li>You must have some ETH to give to the DAO Treasury.</li>
          </ul>
          <a
            href='https://github.com/toke82/Dao-Tutorial'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://dao-tutorial-swart.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Solidity
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Ethers JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Hardhat
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next JS
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default dao;