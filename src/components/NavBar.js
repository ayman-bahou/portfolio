import React, { useState } from 'react'; // Import useState for hover state
import Link from 'next/link';
import Logo from '@/components/Logo';
import { useRouter } from 'next/router'; // Import useRouter
import { InstagramIcon, GithubIcon, LinkedInIcon, FacebookIcon, MoonIcon, SunIcon } from '@/components/Icons'; // Import SunIcon
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    // Determine if the current link is active
    const isActive = router.asPath === href;

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 transition-[width] ease duration-300 ${isActive ? 'w-full' : 'w-0'} dark:bg-light`}
            
            >
                &nbsp;
            </span>
        </Link>
    );
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isHovered, setIsHovered] = useState(false); // State to manage hover

    const handleThemeToggle = () => {
        setMode(mode === "light" ? "dark" : "light");
    };

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between
        dark:text-light'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
                <CustomLink href="/projects" title="Projects" className='mx-4' />
                <CustomLink href="/services" title="Services" className='ml-4' />
                <CustomLink href="/contact" title="Contact" className='ml-4' />
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://www.instagram.com/ayman.bahou/profilecard/?igsh=eHEzY3RoZ3E5ZDN2" target={"_blank"}
                    whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3"><InstagramIcon /></motion.a>
                <motion.a href="https://www.facebook.com/share/18F3sc3ek8/?mibextid=LQQJ4d" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><FacebookIcon /></motion.a>
                <motion.a href="https://github.com/ayman-bahou" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><GithubIcon /></motion.a>
                <motion.a href="http://linkedin.com/in/ayman-bahou-a236a6299" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><LinkedInIcon /></motion.a>
                <button
                    onClick={handleThemeToggle}
                    onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                    onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                    className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                    {isHovered ? (
                        mode === "dark" ? (
                            <MoonIcon className="fill-dark" /> // Show MoonIcon on hover in dark mode
                        ) : (
                            <SunIcon className="fill-dark" /> // Show SunIcon on hover in light mode
                        )
                    ) : (
                        mode === "dark" ? (
                            <SunIcon className="fill-dark" /> // Show SunIcon in dark mode
                        ) : (
                            <MoonIcon className="fill-dark" /> // Show MoonIcon in light mode
                        )
                    )}
                </button>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;