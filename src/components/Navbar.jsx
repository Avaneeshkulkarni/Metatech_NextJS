
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
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

                    <ul className="menu">
                        <li><Link href="/">Home</Link></li>

                        <li className="products-menu">
                            <a href="#">Products</a>
                            <div className="dropdown">
                                <div className="dropdown-item">
                                    <Link href="/products/auto_cutting">
                                        <img src="/images/Metacut I Exposure Machine.png" alt="Cutting & Sectioning Machine" />
                                        <p>Cutting & Sectioning Machine</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/moulding">
                                        <img src="/images/New Grinder Image Maybe.png" alt="Moulding Machine" />
                                        <p>Moulding Machine</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/grinding_polishing">
                                        <img src="/images/New Grinder Image Maybe.png" alt="Grinding & Polishing Machine" />
                                        <p>Grinding & Polishing Machine</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/electropolishing">
                                        <img src="/images/ECM New by Swapnil Sir.png" alt="ElectroPolishing Machine" />
                                        <p>ElectroPolishing Machine</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/microscope">
                                        <img src="/images/Microscope Metagraph Special SPL.png" alt="Microscope & Image Analyzer" />
                                        <p>Microscope & Image Analyzer</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/particle_analysis">
                                        <img src="/images/Microscope Metagraph Special SPL.png" alt="Particle Size Analysis Contamination Estimation" />
                                        <p>Particle Size Analysis Contamination Estimation</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/microhardness">
                                        <img src="/images/Microscope Metagraph Special SPL.png" alt="Micorhardness Testers" />
                                        <p>Micorhardness Testers</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/jominey">
                                        <img src="/images/Twin Jet Thinning New.png" alt="Jominey Setup & Insitu Setup" />
                                        <p>Jominey Setup & Insitu Setup</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/ecm">
                                        <img src="/images/ECM New by Swapnil Sir.png" alt="ECM" />
                                        <p>ECM</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/cnc_tensile">
                                        <img src="/images/CNC Tensile NEW.png" alt="CNC & Laser Tensile Sample Preparation" />
                                        <p>CNC & Laser Tensile Sample Preparation</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/consumables">
                                        <img src="/images/Component Cleaning.png" alt="Consumables" />
                                        <p>Consumables</p>
                                    </Link>
                                </div>
                                <div className="dropdown-item">
                                    <Link href="/products/tech_notes">
                                        <img src="/images/tech notes.jpeg" alt="Tech Notes" />
                                        <p>Tech Notes</p>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/#about-us">About Us</Link></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
