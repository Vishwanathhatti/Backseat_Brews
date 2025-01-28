import { Copy, CopyrightIcon, FacebookIcon, InstagramIcon, Mail, YoutubeIcon } from 'lucide-react';
import React, { useState } from 'react';

const SocialIcon = ({ icon, hoverColor, iconColor, label }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`p-2 cursor-pointer bg-white rounded-full flex justify-center items-center transition-all duration-300 ${hoverColor}`}
            aria-label={label}
            tabIndex={0}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span>
                {React.cloneElement(icon, {
                    color: isHovered ? 'white' : iconColor,
                })}
            </span>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-[#154F39]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#154F39">
                <rect fill="#FFF" width="100%" height="100%" />
                <path
                    transform="scale(-1, -1) translate(-1000, -100)"
                    d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z"
                />
            </svg>

            <div className='w-full border-b-2'>
                <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-between items-center p-10 ">

                    <div className="w-full md:w-[30%] p-2 flex flex-col gap-3 justify-center">
                        <h1 className="text-3xl text-white font-bold">Backseat Brews</h1>
                        <p className="text-xl text-white font-semibold">Stay connected with us for all the latest news and updates.</p>
                        <div className="flex gap-5 items-center">
                            <SocialIcon
                                icon={<FacebookIcon />}
                                hoverColor="hover:bg-blue-600"
                                iconColor="blue"
                                label="Facebook"
                            />
                            <SocialIcon
                                icon={<InstagramIcon />}
                                hoverColor="hover:bg-purple-600"
                                iconColor="purple"
                                label="Instagram"
                            />
                            <SocialIcon
                                icon={<YoutubeIcon />}
                                hoverColor="hover:bg-red-600"
                                iconColor="red"
                                label="YouTube"
                            />
                            <SocialIcon
                                icon={<Mail />}
                                hoverColor="hover:bg-red-600"
                                iconColor="red"
                                label="Mail"
                            />
                        </div>
                    </div>

                    <div className='w-full md:w-[15%] p-2 flex flex-col gap-3 justify-center '>
                        <h1 className='text-xl text-white font-bold'>Quick Links</h1>
                        <ul className='flex flex-col gap-2'>
                            <li className='text-white font-semibold'>Home</li>
                            <li className='text-white font-semibold'>About Us</li>
                            <li className='text-white font-semibold'>Services</li>
                            <li className='text-white font-semibold'>Contact Us</li>
                        </ul>
                    </div>

                    <div className='w-full md:w-[15%] p-2 flex flex-col gap-3 justify-center '>
                        <h1 className='text-xl text-white font-bold'>How it works</h1>
                        <ul className='flex flex-col gap-2'>
                            <li className='text-white font-semibold'>Terms</li>
                            <li className='text-white font-semibold'>Privacy</li>
                            <li className='text-white font-semibold'>Location</li>
                            <li className='text-white font-semibold'>Schedule A Visit</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[30%] p-2 flex flex-col gap-3 justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1436006933423!2d73.9072221!3d18.5675636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11de861a489%3A0xb7d76c20c0840e82!2sBackseat%20Brews!5e0!3m2!1sen!2sin!4v1737745223837!5m2!1sen!2sin"
                            className="w-full h-[250px] border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        
        <div className='max-w-7xl mx-auto p-5 flex justify-center items-center'>
            <div><h3 className='text-white font-semibold flex gap-1'><CopyrightIcon color='white'/>2025- Backseat Brews</h3></div>
        </div>

        </footer>
    );
};

export default Footer;
