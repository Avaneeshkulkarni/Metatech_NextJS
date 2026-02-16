"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function GrindingConsumables() {
    const products = [
        {
            name: "Abrasive Grinding Disc",
            image: "/images/logo.png",
            description: "Silicon Carbide abrasive waterproof paper disc. (Wet/Dry) Paper Quality C weight.",
            specs: [
                "Round Discs - 8\"/9\"/10\"/12\" dia. Plain / PSA Backed"
            ],
            grits: "80, 120, 180, 220, 320, 400, 600, 800, 1000, 1200, 1500, 2000, 2500, 3000, 5000"
        },
        {
            name: "Grinding Discs for Spectro Polishing Machine",
            image: "/images/logo.png",
            description: "Aloxite / Zircon (Plain/PSA) - Paper Base and Cloth Base.",
            specs: [
                "10\" dia x 25.4 mm bore",
                "11\" dia x 40.0 mm bore",
                "14\" dia x 40.0 mm bore"
            ],
            grits: "36, 40, 60 Or as per customer requirement"
        },
        {
            name: "Sample Holder for Spectro Polishing Machine",
            image: "/images/logo.png",
            description: "Magnetic Sample / Coin Holder for Spectro Polishing Machine."
        },
        {
            name: "Abrasive Grinding Belts",
            image: "/images/logo.png",
            description: "Aluminum Oxide / Zirkon Belts / Silicon Carbide.",
            specs: [
                "100 x 915 mm",
                "100 x 1220 mm"
            ],
            grits: "60, 80, 120, 220, 320, 400, 600"
        },
        {
            name: "Diamond Grinding Discs",
            image: "/images/logo.png",
            description: "Diamond Grinding Discs are available in standard sizes in both metal or resin bonded varieties with Pressure Sensitive Adhesive (PSA), plain back or overhanging cloth. They are recommended for coarse and fine grinding of high hardness materials.",
            details: [
                "Metal flex feature a flexible, color-coded, open patterned metal bonded disc for aggressive cutting and reduced loading.",
                "Resin flex feature a flexible, color-coded, open patterned resin bonded disc for aggressive cutting.",
                "Metal bonded discs consist of a high quality diamond abrasive grit bonded to a wheel by an electroplating process.",
                "Resin bonded discs also consist of a high quality diamond abrasive grit bonded to a flat aluminum disc with resin."
            ],
            grits: "80, 120, 220, 320, 400, 500, 800, 1500, 3000"
        },
        {
            name: "Magnetic Fixation",
            image: "/images/logo.png",
            description: "Magnetic base pad, which is permanently attached to the working wheel with a pressure-sensitive adhesive.",
            details: [
                "PSA-backed polishing papers and cloths can be temporarily attached to a teflon-coated magnetic metal plate. This plate with the attached polishing Paper and cloths can be easily removed and exchanged.",
                "When the polishing paper or cloth has been depleted, simply remove it from the teflon-coated plate and replace with a new PSA-backed polishing paper or cloth."
            ]
        }
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/grinding_polishing">Grinding & Polishing</Link>
                    <span className="separator">/</span>
                    <span className="current-page">Grinding Consumables</span>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Grinding Consumables</h1>

                    <div className="product-details-content">
                        {products.map((product, index) => (
                            <div key={index} className="machine-section">
                                <h2 className="machine-name">{product.name}</h2>

                                <div className="machine-content-wrapper">
                                    <div className="machine-image-container">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="machine-image"
                                        />
                                    </div>

                                    <div className="machine-details">
                                        <p className="machine-description">{product.description}</p>

                                        {product.details && product.details.map((detail, idx) => (
                                            <p key={idx} className="machine-description">{detail}</p>
                                        ))}

                                        {product.specs && (
                                            <div className="machine-info-block">
                                                <h4>Available Sizes</h4>
                                                <ul className="specs-list">
                                                    {product.specs.map((spec, idx) => (
                                                        <li key={idx}>{spec}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {product.grits && (
                                            <div className="machine-info-block">
                                                <h4>Available Grits</h4>
                                                <p>{product.grits}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {index < products.length - 1 && <hr className="section-divider" />}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </section>
    );
}
