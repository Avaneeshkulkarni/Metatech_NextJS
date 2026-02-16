"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function Jominey() {
    const machines = [
        {
            name: "Hardness Fixture and Chiller",
            image: "/images/logo.png",
            features: [
                "Motorized fixture for successive hardness indentations with precision positioning.",
                "Fully automatic hardness tester with motorised programmable stage for direct jominy hardness test"
            ]
        }
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/jominey">Jominey End Quench Hardenability Set-up</Link>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Jominey End Quench Hardenability Set-up</h1>

                    <div className="product-info-header">
                        <p>
                            Our Jominey End Quench Hardenability Set-up for precise hardenability testing.
                        </p>
                    </div>

                    <div className="product-details-content">
                        {machines.map((machine, index) => (
                            <div key={index} className="machine-section">
                                <h2 className="machine-name">{machine.name}</h2>

                                <div className="machine-content-wrapper">
                                    <div className="machine-image-container">
                                        <img
                                            src={machine.image}
                                            alt={machine.name}
                                            className="machine-image"
                                        />
                                    </div>

                                    <div className="machine-details">
                                        <div className="machine-info-block">
                                            <h4>Key Features</h4>
                                            <ul className="specs-list">
                                                {machine.features.map((feature, idx) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {index < machines.length - 1 && <hr className="section-divider" />}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </section>
    );
}
