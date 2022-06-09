import React from 'react';

const FeaturedCard = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto px-12 pt-10'>
            <div className='bg-indigo-800 text-slate-100 p-5 rounded-md shadow-lg'>
                <h3 className='text-lg font-semibold mb-3'>Working - React JS</h3>
                <p className='text-slate-300'>Single page application building technology which work through virtual DOM. Easily maintainable and very efficient front-end technology.</p>
            </div>
            <div className='bg-emerald-800 text-slate-100 p-5 rounded-md shadow-lg'>
                <h3 className='text-lg font-semibold mb-3'>Learning - React Native</h3>
                <p className='text-slate-300'>Very interesting cross device application solution providing technology. This is an open source mobile application framework. I am learning react native now.</p>
            </div>
            <div className='bg-cyan-800 text-slate-100 p-5 rounded-md shadow-lg'>
                <h3 className='text-lg font-semibold mb-3'>Interest -Data Stucture and Algorithm</h3>
                <p className='text-slate-300'>According to stack learner, for creating efficient web experience data structure and algorithm is must. I am very interesting to explore it next and build dream application.</p>
            </div>
        </section>
    );
};

export default FeaturedCard;