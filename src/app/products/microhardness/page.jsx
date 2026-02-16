"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function Microhardness() {
    const machines = [
        {
            name: "MVH - V (Fully Automatic)",
            image: "/images/logo.png",
            features: [
                "Motorized X-Y & Z Motion",
                "Autofocus & Auto Reading",
                "Manual Over-ride for all Automation",
                "Automatic Effective Case Graph Generation",
                "Load Range - 1 gram to 2000 grams (3000 grams Optional)",
                "Optional - Overview camera grabbing complete image of the component and operator giving directions of hardness profile from computer screen only"
            ]
        },
        {
            name: "Micro / Macro Hardness Tester",
            subtitle: "Load Cell Based",
            image: "/images/logo.png",
            features: [
                "Load cell base with loop Technology",
                "Options from 10gmf to 30kgf",
                "Auto focusing Optional",
                "Auto XY stage Optional",
                "upto 30 Kg More than 10 installed in 10 Years"
            ]
        }
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/microhardness">Automatic Micro Hardness Testers</Link>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Automatic Micro Hardness Testers</h1>

                    <div className="product-info-header">
                        <p>
                            Our range of automatic micro hardness testers for precise hardness measurement in metallographic applications.
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
