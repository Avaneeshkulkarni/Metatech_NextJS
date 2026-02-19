
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-grid">
                <div className="footer-logo-col">
                    <img src="/images/logo.png" alt="Metatech Industries Logo" className="footer-logo" />
                    <p>Leading the way in material science and metrology solutions for over three decades.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><img src="/images/facebook-icon.png" alt="Facebook" /></a>
                        <a href="#" aria-label="Twitter"><img src="/images/twitter-icon.png" alt="Twitter" /></a>
                        <a href="#" aria-label="LinkedIn"><img src="/images/linkedin-icon.png" alt="LinkedIn" /></a>
                    </div>
                </div>

                <div className="footer-links-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><a href="#">Careers</a></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/#about-us">About Us</Link></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="footer-products-col">
                    <h3>Our Product Categories</h3>
                    <ul>
                        <li><Link href="/products/auto_cutting">Cutting & Sectioning</Link></li>
                        <li><Link href="/products/moulding">Moulding Machines</Link></li>
                        <li><Link href="/products/grinding_polishing">Grinding & Polishing</Link></li>
                        <li><Link href="/products/electropolishing">ElectroPolishing</Link></li>
                        <li><Link href="/products/microscope">Microscope & Image Analyzer</Link></li>
                        <li><Link href="/products/microhardness">Microhardness Testers</Link></li>
                        <li><Link href="/products/jominey">Jominey End Quench Hardenability Set-up</Link></li>

                        <li><Link href="/products/in_situ_metallography">In-situ Metallography Kit</Link></li>
                        <li><Link href="/products/hardness_testers">Hardness Testers</Link></li>
                        <li><Link href="/products/hardness_test_blocks">Hardness Test Blocks Diamond Indenters</Link></li>
                        <li><Link href="/products/cnc_tensile">CNC Tensile Sample Preparation</Link></li>
                        <li><Link href="/products/particle_analysis">Magnetic Particle Inspection Consumables</Link></li>
                    </ul>
                </div>

                <div className="footer-contact-col">
                    <h3>Contact Us</h3>
                    <p><strong>Head Office:</strong></p>
                    <p>476, Narayan Peth, Cosmos Bank Building, Laxmi Road, Pune: 411041</p>
                    <p>Email: <a href="mailto:sales@metatechind.com">sales@metatechind.com</a></p>
                    <p>Sales: <a href="mailto:sales@company.com">sales@metatechind.com</a></p>
                    <p>Support: <a href="mailto:sales@metatechind.com">sales@metatechind.com</a></p>
                    <p>Phone: <a href="tel:+919999999999">+91 9999999999</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Metatech Industries. All rights reserved.</p>
                <div className="footer-legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
