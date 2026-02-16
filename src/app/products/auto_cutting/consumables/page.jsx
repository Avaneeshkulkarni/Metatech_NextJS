"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function CuttingConsumables() {
    const products = [
        {
            name: "Abrasive Cut Off Wheels",
            image: "/Cutting and sectioning/abrasive_wheels.png",
            subtitle: "Plain Cut off Wheels / Reinforced Abrasive Cut off Wheels",
            description: "Aluminum oxide particle wheels are made out of various grits and bonds in phenolic binder. Wheels are formulated to give ideal finish, for metallographic preparations. Aluminium oxide wheels are used for all the ferrous / hard materials and silicon Carbide wheels are used to Soft/ Non Ferrous metals.",
            specs: [
                "Hardness up to 45 HRC (Regular)",
                "Hardness more than 45 HRC (Special)"
            ],
            sizes: [
                { dia: "150", thk: "0.8", bore: "12.7" },
                { dia: "200", thk: "1.0", bore: "25.4" },
                { dia: "250", thk: "1.5", bore: "25.4" },
                { dia: "300", thk: "2.0", bore: "25.4" },
                { dia: "350", thk: "2.5", bore: "25.4" },
                { dia: "400", thk: "3.0", bore: "25.4" },
                { dia: "450", thk: "3.0", bore: "25.4" },
                { dia: "500", thk: "3.5", bore: "25.4" }
            ],
            note: "Custom made wheels available for their Dia., Thk., Bore (31.75 & 32 mm), Hardness."
        },
        {
            name: "Cutting Fluid",
            image: "/Cutting and sectioning/cutting_fluid.png",
            subtitle: "Standard / Regular",
            description: "With rust resisting additive, water soluble cutting fluid suitable for all abrasive cut off machines. Qty.: 5 Ltr Can"
        },
        {
            name: "Diamond Wafering Blades",
            image: "/Cutting and sectioning/dcm_blades.png",
            description: "Metal Bonded Diamond wafering blades are offered in low and high concentration diamond impregnation on continuous rim. They are suitable for ductile materials, polymers, pc boards, thermal spray coatings, Titanium etc. and for sectioning very hard or brittle materials including ceramics, carbides, refractories, silicon; boron composite, glasses.",
            details: [
                "Low concentration blades are recommended for sectioning very hard or brittle materials including ceramic, carbides, refractories, silicon, boron composites & glass.",
                "High concentration blades are recommended for aggressive general laboratory sectioning of ductile materials, most metals, polymers, PC boards, thermal spray coatings and titanium."
            ],
            bladeSizes: [
                "3\" Dia. x 0.006\" thick x ½\" Central hole",
                "4\" Dia. x 0.012\" thick x ½\" Central hole",
                "5\" Dia. x 0.015\" thick x ½\" Central hole",
                "6\" Dia. x 0.020\" thick x ½\" Central hole",
                "7\" Dia. x 0.025\" thick x ½\" Central hole",
                "8\", 9\", 10\", 12\" available"
            ]
        },
        {
            name: "CBN Wafering Blades",
            image: "/Cutting and sectioning/dcm_blades.png",
            subtitle: "Medium Concentration Metal Bond / Resin Bond Continuous Rim",
            description: "Recommended for sectioning of ferrous materials including high speed steels, inconel, stellite, iron and cobalt base alloys, nickel base super alloys, lead base alloys, titanium alloys and stainless steels."
        },
        {
            name: "Special Coolant Oil for Diamond Cut off Wheels",
            image: "/Cutting and sectioning/spl_coolant.png",
            description: "Special formulation, for quenching the heat during cutting operation."
        }
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/auto_cutting">Cutting Machine</Link>
                    <span className="separator">/</span>
                    <span className="current-page">Consumables</span>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Cutting and Sectioning Machine Consumables</h1>

                    <div className="product-details-content">
                        {products.map((product, index) => (
                            <div key={index} className="machine-section">
                                <h2 className="machine-name">{product.name}</h2>
                                {product.subtitle && <h3 className="machine-subtitle">{product.subtitle}</h3>}

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
                                                <h4>Specifications</h4>
                                                <ul className="specs-list">
                                                    {product.specs.map((spec, idx) => (
                                                        <li key={idx}>{spec}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {product.sizes && (
                                            <div className="machine-info-block">
                                                <h4>Sizes (Dia. × Thk. × Bore in mm)</h4>
                                                <table className="specs-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Diameter (mm)</th>
                                                            <th>Thickness (mm)</th>
                                                            <th>Bore (mm)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {product.sizes.map((size, idx) => (
                                                            <tr key={idx}>
                                                                <td>{size.dia}</td>
                                                                <td>{size.thk}</td>
                                                                <td>{size.bore}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}

                                        {product.note && (
                                            <p className="machine-description"><strong>{product.note}</strong></p>
                                        )}

                                        {product.bladeSizes && (
                                            <div className="machine-info-block">
                                                <h4>Available Sizes</h4>
                                                <ul className="specs-list">
                                                    {product.bladeSizes.map((size, idx) => (
                                                        <li key={idx}>{size}</li>
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

