import React from 'react';

const Footer = () => {
    return (
        <div className="bg-slate-900 text-center py-3 mb-0 text-slate-300">
            Copyright &copy; {new Date().getFullYear()} <a className='text-indigo-400' href="https://shaikh-najmul-islam.web.app/">Shaikh Najmul Islam</a>
        </div>
    );
};

export default Footer;