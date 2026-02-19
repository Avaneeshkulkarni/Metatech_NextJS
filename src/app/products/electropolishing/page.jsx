"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import MachineImageCarousel from '@/components/MachineImageCarousel';

export default function ElectroPolishing() {
    const machines = [
        {
            name: "ELECTROPOL",
            images: ["/images/electropol1.png",
                "/images/electropol2.png"
            ]
        }
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/electropolishing">Electro Polishing Machine</Link>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Electro Polishing Machine</h1>

                    <div className="product-info-header">
                        <p>
                            Our range of electro polishing machines for metallographic sample preparation.
                        </p>
                    </div>

                    <div className="product-details-content">
                        {machines.map((machine, index) => (
                            <div key={index} className="machine-section">
                                <h2 className="machine-name">{machine.name}</h2>

                                <div className="machine-content-wrapper">
                                    {/* Single image */}
                                    {machine.image && (
                                        <div className="machine-image-container">
                                            <img
                                                src={machine.image}
                                                alt={machine.name}
                                                className="machine-image"
                                            />
                                        </div>
                                    )}

                                    {/* Multiple images as carousel */}
                                    {machine.images && (
                                        <div className="machine-image-container">
                                            <MachineImageCarousel images={machine.images} altPrefix={machine.name} />
                                        </div>
                                    )}
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
