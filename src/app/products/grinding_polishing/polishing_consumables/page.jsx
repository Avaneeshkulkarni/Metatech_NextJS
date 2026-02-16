"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function PolishingConsumables() {
    const products = [
        {
            name: "Diamond Paste (Monocrystalline)",
            image: "/images/logo.png",
            description: "Mono crystalline (M.C.) structure type diamond with heavy concentration ensures the free cutting action required to achieve best cutting action.",
            specs: [
                "Size: 0.25, 1, 3, 6, 8, 15, 30, 45 Microns",
                "5 gm syringe"
            ]
        },
        {
            name: "Aerosol Spray",
            image: "/images/logo.png",
            description: "For extremely accurate tolerances and flawless finishes in microns or light band. Aerosol Spray can achieve a virtually scratch-free surface with the highest degree of flatness and brilliance."
        },
        {
            name: "Diamond Suspensions",
            image: "/images/logo.png",
            subtitle: "Monocrystalline / Polycrystalline — Water / Oil Soluble",
            description: "These suspensions are suitable for use in power lapping, general polishing applications or in automated diamond dispensing systems.",
            specs: [
                "Size: 0.25, 1, 3, 6, 9, 15, 30, 45 Microns"
            ],
            details: [
                "Packing - Bottle only, Finger pump, Trigger spray & Refill"
            ]
        },
        {
            name: "Colloidal Silica",
            image: "/images/logo.png",
            description: "Colloidal Silica (white) Has been formulated to reduce polishing time and are priced very economically.",
            details: [
                "OPS under normal use may be diluted with water. Used for non-ferrous metals and very ductile materials like refractory metals and others. (Non Coagulating).",
                "Micron 0.04 and 0.06."
            ]
        },
        {
            name: "Alumina Polishing Suspension / Powder",
            image: "/images/logo.png",
            subtitle: "Universal grade",
            description: "Lavigated Alumina suspension for routine ferrous and non ferrous laboratory applications. Bottle / 500 gms.",
            details: [
                "Imported Alumina Suspension available: 0.05, 0.3, 0.1, 1.0"
            ]
        },
        {
            name: "Polishing Cloths",
            image: "/images/logo.png",
            specs: [
                "Sizes: 8\", 10\", 12\" dia. Plain / Self Adhesive (PSA) / Magnetic Back / Metal Back"
            ],
            clothTypes: [
                "Synthetic fiber flocked on flexible water proof carrier, can be used with 3 micron diamond compound.",
                "Synthetic flocked on flexible cotton carrier, Used with 3-6 micron diamond compound.",
                "Synthetic flocked on a flexible cotton carrier. A more heavy duty cloth for use with 6-9 micron diamond compound.",
                "Silk cloth - for napless polishing application.",
                "Billiard cloth - for general/coarse application.",
                "Special Cloth for Fine diamond & Colloidal Silica."
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
                    <span className="current-page">Polishing Consumables</span>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Polishing Consumables</h1>

                    <div className="product-details-content">
                        {products.map((product, index) => (
                            <div key={index} className="machine-section">
                                <h2 className="machine-name">{product.name}</h2>
                                {product.subtitle && <p className="machine-subtitle">{product.subtitle}</p>}

                                <div className="machine-content-wrapper">
                                    <div className="machine-image-container">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="machine-image"
                                        />
                                    </div>

                                    <div className="machine-details">
                                        {product.description && (
                                            <p className="machine-description">{product.description}</p>
                                        )}

                                        {product.details && product.details.map((detail, idx) => (
                                            <p key={idx} className="machine-description">{detail}</p>
                                        ))}

                                        {product.specs && (
                                            <div className="machine-info-block">
                                                <h4>Specifications</h4>
                                                <ul className="specs-list">
                                                    {product.specs.map((spec, idx) => (
                                                        <li key={idx}>{spec}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {product.clothTypes && (
                                            <div className="machine-info-block">
                                                <h4>Available Types</h4>
                                                <ul className="feature-list">
                                                    {product.clothTypes.map((type, idx) => (
                                                        <li key={idx}>{type}</li>
                                                    ))}
                                                </ul>
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
