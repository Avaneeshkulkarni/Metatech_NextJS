"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav>
            <div className="top-contact-bar">
                <div className="contact-info-container">
                    <span>📞 +91 9999999999</span>
                    <span>✉️ sales@metatechind.com</span>
                </div>
            </div>

            <div className="main-navbar-content">
                <div className="left-section">
                    <Link href="/">
                        <img src="/images/logo.png" alt="Company Logo" className="logo" />
                    </Link>

                    <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                        ☰
                    </button>

                    <ul className={`menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                        <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>

                        <li className="products-menu">
                            <a href="#">Products</a>
                            <div className="dropdown">
                                <div className="dropdown-item">
                                    <Link href="/products/auto_cutting" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/Cutting and sectioning/Autocut_main.png" alt="Cutting & Sectioning Machine" />
                                        <p>Cutting & Sectioning Machine</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/moulding" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/moulding/mould.png" alt="Moulding Machine" />
                                        <p>Moulding Machine</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/grinding_polishing" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/grinding_polishing/autopol1.png" alt="Grinding & Polishing Machine" />
                                        <p>Grinding & Polishing Machine</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/electropolishing" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/images/ECM New by Swapnil Sir.png" alt="ElectroPolishing Machine" />
                                        <p>ElectroPolishing Machine</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/microscope" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/microscope/metagraph.png" alt="Microscope & Image Analyzer" />
                                        <p>Microscope & Image Analyzer</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/microhardness" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/microhardness_tester/mvh1000.png" alt="Microhardness Testers" />
                                        <p>Microhardness Testers</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/jominey" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/jeq/1.png" alt="Jominey End Quench Hardenability Set-up" />
                                        <p>Jominey End Quench Hardenability Set-up</p>
                                    </Link>
                                </div>

                                <div className="dropdown-item">
                                    <Link href="/products/in_situ_metallography" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/insitu/m1.png" alt="In-situ Metallography Kit" />
                                        <p>In-situ Metallography Kit</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/hardness_testers" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/hardness_tester/ht1.png" alt="Hardness Testers" />
                                        <p>Hardness Testers</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/hardness_test_blocks" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/hardness_diamond/hd1.png" alt="Hardness Test Blocks Diamond Indenters" />
                                        <p>Hardness Test Blocks Diamond Indenters</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/cnc_tensile" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/images/cnc1.png" alt="CNC Tensile Sample Preparation Machines" />
                                        <p>CNC Tensile Sample Preparation Machines</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/particle_analysis" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/magnetic/m1.png" alt="Magnetic Particle Inspection Consumables" />
                                        <p>Magnetic Particle Inspection Consumables</p>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                        <li><Link href="/#about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
