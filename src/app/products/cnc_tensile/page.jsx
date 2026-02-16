"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function CNCTensile() {
    const machines = [
        {
            name: "CNC Tensile Sample Preparation Machine",
            subtitle: "Round and Flat",
            image: "/images/logo.png",
            features: [
                "Precision sample preparation",
                "Lesser time of production",
                "Repeatability",
                "Threading facility",
                "Floor / Table top models",
                "Option for Jominey sample preparation",
                "Powerful CNC programs"
            ]
        }
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/cnc_tensile">CNC Tensile Sample Preparation Machines</Link>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">CNC Tensile Sample Preparation Machines (Round and Flat)</h1>

                    <div className="product-info-header">
                        <p>
                            Our CNC Tensile Sample Preparation Machines for round and flat sample preparation.
                        </p>
                    </div>

                    <div className="product-details-content">
                        {machines.map((machine, index) => (
                            <div key={index} className="machine-section">
                                <h2 className="machine-name">{machine.name}</h2>
                                {machine.subtitle && <h3 className="machine-subtitle">{machine.subtitle}</h3>}

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
