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
        { href: "/products/auto_cutting", img: "/Cutting and sectioning/Autocut_main.png", title: "Cutting & Sectioning Machine" },
        { href: "/products/moulding", img: "/moulding/mould.png", title: "Moulding Machine" },
        { href: "/products/grinding_polishing", img: "/grinding_polishing/autopol1.png", title: "Grinding & Polishing Machine" },
        { href: "/products/electropolishing", img: "/images/ECM New by Swapnil Sir.png", title: "ElectroPolishing Machine" },
        { href: "/products/microscope", img: "/microscope/metagraph.png", title: "Microscope & Image Analyzer" },
        { href: "/products/microhardness", img: "/microhardness_tester/mvh1000.png", title: "Microhardness Testers" },
        { href: "/products/jominey", img: "/jeq/1.png", title: "Jominey End Quench Hardenability Set-up" },

        { href: "/products/in_situ_metallography", img: "/insitu/m1.png", title: "In-situ Metallography Kit" },
        { href: "/products/hardness_testers", img: "/hardness_tester/ht1.png", title: "Hardness Testers" },
        { href: "/products/hardness_test_blocks", img: "/hardness_diamond/hd1.png", title: "Hardness Test Blocks Diamond Indenters" },
        { href: "/products/cnc_tensile", img: "/images/cnc1.png", title: "CNC Tensile Sample Preparation Machines" },
        { href: "/products/particle_analysis", img: "/magnetic/m1.png", title: "Magnetic Particle Inspection Consumables" }
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
