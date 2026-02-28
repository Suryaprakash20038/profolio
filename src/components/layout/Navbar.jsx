import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed w-full z-[100] top-0 pt-6 px-4 pointer-events-none flex justify-center">
            <div className={`pointer-events-auto transition-all duration-500 rounded-full ${scrolled ? 'bg-white/80 backdrop-blur-xl border border-white/60 shadow-premium py-3 px-6 w-full max-w-5xl' : 'bg-transparent py-4 px-6 w-full max-w-7xl'} flex justify-between items-center`}>

                <a href="#home" className="text-2xl font-black tracking-tighter group flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald to-royal text-white flex items-center justify-center text-sm shadow-sm group-hover:rotate-12 transition-transform">S</div>
                    <span className="text-evergreen group-hover:text-emerald transition-colors duration-300 hidden sm:block">
                        SURYA<span className="text-emerald">.</span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/40 shadow-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-royal hover:text-white hover:bg-evergreen px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex">
                    <a
                        href="https://github.com/Suryaprakash20038"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-mint-dark/50 hover:bg-emerald text-evergreen hover:text-white p-3 rounded-full font-bold transition-all shadow-sm flex items-center gap-2 border border-emerald/10 hover:border-emerald"
                    >
                        <Github size={20} />
                    </a>
                </div>

                <div className="md:hidden pointer-events-auto">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-evergreen p-2 bg-white/80 backdrop-blur-md rounded-full border border-white/50 shadow-sm hover:text-emerald focus:outline-none transition-colors">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-[-1] pointer-events-auto bg-body-bg/95 backdrop-blur-2xl px-6 pt-32 pb-10 flex flex-col justify-between">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-4xl font-black text-evergreen tracking-tighter hover:text-emerald hover:translate-x-4 transition-all"
                                onClick={() => setIsOpen(false)}
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
