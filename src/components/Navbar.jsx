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
                                        <img src="/images/Metacut I Exposure Machine.png" alt="Cutting & Sectioning Machine" />
                                        <p>Cutting & Sectioning Machine</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/moulding" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/images/New Grinder Image Maybe.png" alt="Moulding Machine" />
                                        <p>Moulding Machine</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/grinding_polishing" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/images/New Grinder Image Maybe.png" alt="Grinding & Polishing Machine" />
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
                                        <img src="/images/Microscope Metagraph Special SPL.png" alt="Microscope & Image Analyzer" />
                                        <p>Microscope & Image Analyzer</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/particle_analysis" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/images/Microscope Metagraph Special SPL.png" alt="Particle Size Analysis Contamination Estimation" />
                                        <p>Particle Size Analysis Contamination Estimation</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/microhardness" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/images/Microscope Metagraph Special SPL.png" alt="Micorhardness Testers" />
                                        <p>Micorhardness Testers</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/jominey" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/images/Twin Jet Thinning New.png" alt="Jominey Setup & Insitu Setup" />
                                        <p>Jominey End Quench Hardenability Set-up</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/consumables" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/images/Component Cleaning.png" alt="Consumables" />
                                        <p>Metallography Consumables</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/in_situ_metallography" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/images/logo.png" alt="In-situ metallography kit" />
                                        <p>In-situ metallography kit</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/hardness_testers" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/images/logo.png" alt="Hardness Testers" />
                                        <p>Hardness Testers</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/hardness_test_blocks" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/images/logo.png" alt="Hardness Test Blocks Diamond Indenters" />
                                        <p>Hardness Test Blocks Diamond Indenters</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/cnc_tensile" onClick={() => setMobileMenuOpen(false)}>
                                        <img src="/images/logo.png" alt="CNC Tensile Sample Preparation Machines" />
                                        <p>CNC Tensile Sample Preparation Machines</p>
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
