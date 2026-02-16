"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function MouldingConsumables() {
    const compressionMounting = [
        {
            name: "Bakelite / Phenolic Hot Moulding Powder",
            image: "/images/logo.png",
            description: "Black, Red, Green colors available. Superior quality with relatively low shrinkage, high mechanical strength.",
            specs: [
                "Specific Hardness - 55 Shore D",
                "Gravity - 1.4 Kgs",
                "Shrinkage - 0.006 in/in in compression",
                "Coefficient of linear thermal expansion - 50 in/in/°C"
            ]
        },
        {
            name: "Transparent Moulding Powder",
            image: "/images/logo.png",
            description: "For Transparent Hot Moulding."
        },
        {
            name: "Resins (Glass Fiber Filled)",
            image: "/images/logo.png",
            description: "BLACK EPOXY THERMOSETTING has superior edge retention, tough grinding and excellent flow characteristics. Chemical resistant. High hardness."
        },
        {
            name: "Diallyl Phthalate",
            image: "/images/logo.png",
            description: "This has higher hardness and can be used as a front end or facing moulding material where the hardness difference of the stock (sample) and that of mounting resin is very high to avoid edge rounding effect.",
            details: [
                "Also can be used in case of retaining small plating / coating layers.",
                "Being a costly material one can use it in few mm thickness initially and then can use normal moulding material.",
                "High hardness."
            ]
        },
        {
            name: "Conductive Mould Material",
            image: "/images/logo.png",
            description: "This is copper filled thermosetting resin that is electrically conductive."
        },
        {
            name: "Mould Release Spray",
            image: "/images/logo.png",
            description: "It is advisable to spray the lubricant spray before hot and cold compression for easy ejection."
        }
    ];

    const coldMounting = [
        {
            name: "Cold Mounting System",
            image: "/images/logo.png",
            description: "Cold mounting systems are preferred when speed and ease are desired, especially for high volume production. Curing cycle - 15 minutes.",
            details: [
                "Binder 400 ml + Hardener 400 gm and 1 kg pack also available."
            ]
        },
        {
            name: "Silicon Rubber Moulds",
            image: "/images/logo.png",
            description: "Reusable mould for Cold Mounting.",
            specs: [
                "Dia. 20mm, 25.4 mm, 30 mm, 31.75 mm, 40 mm, 50 mm",
                "Or As per Customers Requirement"
            ]
        },
        {
            name: "Plastic Moulds",
            image: "/images/logo.png",
            specs: [
                "Dia. 25.4 mm, 31.75 mm, 40 mm",
                "Or As per Customers Requirement"
            ]
        },
        {
            name: "Mounting Clips",
            image: "/images/logo.png",
            subtitle: "Sample Support Clips",
            description: "Series of Clips hold thin samples on edge for encapsulation. Use metal for compression mounting and plastic for cold mounting.",
            details: [
                "Plastic Clip for Cold Mounting",
                "Stainless Steel Clip for Compression Mounting"
            ]
        }
    ];

    const renderProduct = (product, index, total) => (
        <div key={index} className="machine-section">
            <h3 className="machine-name" style={{ fontSize: '22px' }}>{product.name}</h3>
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
                </div>
            </div>

            {index < total - 1 && <hr className="section-divider" />}
        </div>
    );

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/moulding">Moulding Machine</Link>
                    <span className="separator">/</span>
                    <span className="current-page">Consumables</span>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Moulding Machine Consumables</h1>

                    <div className="product-details-content">

                        <h2 className="machine-name">A) Compression Mounting</h2>
                        <hr className="section-divider" />

                        {compressionMounting.map((product, index) =>
                            renderProduct(product, index, compressionMounting.length)
                        )}

                        <br />
                        <h2 className="machine-name">B) Cold Mounting</h2>
                        <hr className="section-divider" />

                        {coldMounting.map((product, index) =>
                            renderProduct(product, index, coldMounting.length)
                        )}

                    </div>
                </section>
            </main>
        </section>
    );
}
