import { CloudDownloadIcon, CodeIcon, DatabaseIcon, StatusOnlineIcon } from '@heroicons/react/solid';
import React from 'react';

const MyServices = () => {
    return (
        <section className=' container mx-auto px-12 pt-10 mb-10'>
            <div className='text-center mb-5'>
                <h2 className='text-4xl font-semibold text-indigo-600'>Services I Provide</h2>
                <p className='text-lg font-semibold text-slate-700'>These are the services where I can help and your team.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='bg-indigo-500 text-slate-100 p-5 shadow-lg'>
                    <CodeIcon className='w-20 h-20 mb-5' />
                    <h3 className='text-lg font-semibold mb-3'>Figma to React</h3>
                    <p className='text-slate-300'>I am able to convert figma design to react code means functional front end website. I ensure pixel perfect designe and always try to put proper comment and make the code readble and well organised.</p>
                </div>
                <div className='bg-emerald-800 text-slate-100 p-5 shadow-lg'>
                    <CloudDownloadIcon className='w-20 h-20 mb-5' />
                    <h3 className='text-lg font-semibold mb-3'>Front-end Development</h3>
                    <p className='text-slate-300'>I am able to build a responsive website so that your website will look perfect on all the small and wide screens.I have almost 6 month of experience and complete almost 8+ projects.. I have good skills on HTML5, CSS3, BOOTSTRAP, Tailwind CSS, JAVASCRIPT, REACT JS .</p>
                </div>
                <div className='bg-cyan-600 text-slate-100 p-5 shadow-lg'>
                    <DatabaseIcon className='w-20 h-20 mb-5' />
                    <h3 className='text-lg font-semibold mb-3'>Back-end Development</h3>
                    <p className='text-slate-300'>I also have good hands-on experience about Mongodb , Express , Node Heroku . So i also build a MERN project .I am new to this portal but I will give you quality work. I am complete 3+ full-stack project .</p>
                </div>
                <div className='bg-indigo-500 text-slate-100 p-5 shadow-lg'>
                    <StatusOnlineIcon className='w-20 h-20 mb-5' />
                    <h3 className='text-lg font-semibold mb-3'>Mainatin existing MERN website</h3>
                    <p className='text-slate-300'>Managing MERN site is also a very crucial and I am able to work on an existing site for maintain error handaling, adding new features, develop seo and so on. </p>
                </div>
            </div>
        </section>
    );
};

export default MyServices;