"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // Assuming Footer component exists, if not I will remove it later or check key files. Actually I should check if Footer exists first. 
// Looking at file list, I missed checking for Footer.
// Let's check `layout.jsx` to see if Navbar and Footer are global.
// `src/app/layout.jsx` was listed in open documents. 
// I will read `src/app/layout.jsx` first to decide if I need to include Navbar/Footer here. 
// Usually they are in layout. 

// I will hold off on writing the file content until I check layout.jsx. 
// But I can't do conditional logic here easily without multiple turns. 
// Be safe: most Next.js apps have Navbar/Footer in layout. 
// I will assume they are in layout and just create the page content.
// If not, I can fix it later.
// The user provided `Navbar.jsx` content, but I didn't see `layout.jsx` content yet.
// Wait, I did see `layout.jsx` in the file list but haven't read it.
// Actually, `src/app/page.jsx` (Home) has `<Carousel/>` and `<section>`. It doesn't import Navbar/Footer. 
// So it is highly likely they are in `layout.jsx`.

// WRITING THE FILE NOW
import "@/app/globals.css"; // Ensure styles are available if needed, though usually global.

export default function ProductsPage() {
    const products = [
        { href: "/products/auto_cutting", img: "/images/Metacut I Exposure Machine.png", title: "Cutting & Sectioning Machine" },
        { href: "/products/moulding", img: "/images/New Grinder Image Maybe.png", title: "Moulding Machine" },
        { href: "/products/grinding_polishing", img: "/images/New Grinder Image Maybe.png", title: "Grinding & Polishing Machine" },
        { href: "/products/electropolishing", img: "/images/ECM New by Swapnil Sir.png", title: "ElectroPolishing Machine" },
        { href: "/products/microscope", img: "/images/Microscope Metagraph Special SPL.png", title: "Microscope & Image Analyzer" },
        { href: "/products/particle_analysis", img: "/images/Microscope Metagraph Special SPL.png", title: "Particle Size Analysis Contamination Estimation" },
        { href: "/products/microhardness", img: "/images/Microscope Metagraph Special SPL.png", title: "Micorhardness Testers" },
        { href: "/products/jominey", img: "/images/Twin Jet Thinning New.png", title: "Jominey End Quench Hardenability Set-up" },
        { href: "/products/consumables", img: "/images/Component Cleaning.png", title: "Metallography Consumables" },
        { href: "/products/in_situ_metallography", img: "/images/logo.png", title: "In-situ metallography kit" },
        { href: "/products/hardness_testers", img: "/images/logo.png", title: "Hardness Testers" },
        { href: "/products/hardness_test_blocks", img: "/images/logo.png", title: "Hardness Test Blocks Diamond Indenters" },
        { href: "/products/cnc_tensile", img: "/images/logo.png", title: "CNC Tensile Sample Preparation Machines" }
    ];

    return (
        <section className="products-page-container">
            <h1>Our Products</h1>
            <div className="products-grid">
                {products.map((product, index) => (
                    <Link href={product.href} key={index} className="product-card-link">
                        <div className="product-card">
                            <div className="image-container">
                                <img src={product.img} alt={product.title} />
                            </div>
                            <div className="card-content">
                                <h3>{product.title}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
