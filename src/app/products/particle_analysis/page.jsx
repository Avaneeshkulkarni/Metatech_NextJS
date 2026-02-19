"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import MachineImageCarousel from '@/components/MachineImageCarousel';

export default function MagneticParticleInspection() {
    const magneticImages = [
        "/magnetic/m1.png",
        "/magnetic/m2.png",
        "/magnetic/m3.png",
        "/magnetic/m4.png",
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/particle_analysis">Magnetic Particle Inspection Consumables</Link>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">MAGNETIC PARTICLE INSPECTION CONSUMABLES</h1>

                    <div className="product-details-content">
                        <div className="machine-section">
                            <div className="machine-content-wrapper">
                                <MachineImageCarousel
                                    images={magneticImages}
                                    altPrefix="Magnetic Particle Inspection"
                                />
                                <div className="machine-details">
                                    <ul className="specs-list">
                                        <li>Fluorescent yellow-green</li>
                                        <li>Oil Base Magnetic Powder</li>
                                        <li>Fluorescent Magnetic</li>
                                        <li>Water Base Powder</li>
                                        <li>MPI Carrier Oil Liquid / Dye Penetrant</li>
                                        <li>Testing Chemicals</li>
                                        <li>Electro Magnetic Yokes UV LED Lamps</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
}
