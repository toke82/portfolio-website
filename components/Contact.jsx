import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
const Contact = () => {
    return (
        <div id='contact' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='py-8 text-gray-700'>Get in touch</h1>
                    <Link
                        className='py-16 font-bold text-gray-600 sm:max-w-[70%] m-auto'
                        href="mailto:adrian.casal.rodriguez@gmail.com"
                    >
                        Email: adrian.casal.rodriguez@gmail.com
                    </Link>

                    <div className='flex items-center justify-between max-w-[330px] m-auto py-8'>
                        <a
                            href='https://www.linkedin.com/in/adrian-casal/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href='https://github.com/toke82'
                            target='_blank'
                            rel="noreferrer"
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                        <a
                            href='https://twitter.com/AdrCasal'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaTwitter />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;