import { InboxIcon, PhoneIcon, UserAddIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSend, setIsSend] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if (name && email && message) {
            const serviceId = 'service_ar6wv0u';
            const templateId = 'template_nngu5ks';
            const userId = 'iUkHEtvWcuCvMG5LO';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setIsSend(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div id="contact-form" className='bg-blue-900 container mx-auto my-12 px-12 rounded-md shadow-md py-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-center'>
            <div>
                <h2 className='text-3xl font-semibold text-white mb-3'>Feel Free To Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={e => setName(e.target.value)} className='w-full my-3 p-3' name='name' value={name} type="text" placeholder="Your Name" />
                    <input onChange={e => setEmail(e.target.value)} className='w-full my-3 p-3' name='email' value={email} type="email" placeholder="Your email address" />
                    <textarea className='w-full my-3 p-3' name="message" value={message} form="usrform" placeholder='Write message' onChange={e => setMessage(e.target.value)}></textarea>
                    <input className='w-full bg-white hover:bg-slate-100 duration-300 text-blue-800 font-semibold p-3 cursor-pointer' type="submit" value="Send" />
                </form>
                {
                    isSend ? <p className='mt-5 text-white'>Thank you for your message, we will be in touch in on time!</p> : ""
                }
            </div>
            <div className='ml-0 md:ml-10'>
                <div className="flex flex-row gap-2 items-center text-white">
                    <p className='mr-5'>
                        <UserAddIcon className='w-20 h-20 border-2 rounded-full p-3' />
                    </p>
                    <div >
                        <h3 className='text-2xl font-semibold'>Address</h3>
                        <p className='text-slate-300'>Bangabandhu Road, Gopalganj, Bangladesh</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 my-8 items-center text-white">
                    <p className='mr-5'><PhoneIcon className='w-20 h-20 border-2 rounded-full p-3' /></p>
                    <div >
                        <h3 className='text-2xl font-semibold'>Phone</h3>
                        <p className='text-slate-300'>+8801303164150</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center text-white">
                    <p className='mr-5'><InboxIcon className='w-20 h-20 border-2 rounded-full p-3' /></p>
                    <div >
                        <h3 className='text-2xl font-semibold'>Email</h3>
                        <p className='text-slate-300'>shaikh.najmulislam17@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;