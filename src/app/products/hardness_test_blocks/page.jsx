"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import MachineImageCarousel from '@/components/MachineImageCarousel';

export default function HardnessTestBlocks() {
    const transmountImages = [
        "/hardness_diamond/transmount1.png",
        "/hardness_diamond/transmount2.png",
        "/hardness_diamond/transmount3.png",
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/hardness_test_blocks">Hardness Test Blocks Diamond Indenters</Link>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Hardness Test Blocks Diamond Indenters</h1>

                    <div className="product-details-content">

                        {/* 1. Hardness Test Blocks Diamond Indenters */}
                        <div className="machine-section">
                            <h2 className="machine-name">Hardness Test Blocks Diamond Indenters</h2>
                            <div className="machine-content-wrapper">
                                <div className="machine-image-container">
                                    <img
                                        src="/hardness_diamond/hd1.png"
                                        alt="Hardness Test Blocks Diamond Indenters"
                                        className="machine-image"
                                    />
                                </div>
                                <div className="machine-details">
                                    <ul className="specs-list">
                                        <li>Rockwell</li>
                                        <li>Vickers Micro Vickers</li>
                                        <li>Brinell</li>
                                        <li>Rockwell Superficial</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <hr className="section-divider" />

                        {/* 2. Vertical Band Saw */}
                        <div className="machine-section">
                            <h2 className="machine-name">Vertical Band Saw</h2>
                            <div className="machine-content-wrapper">
                                <div className="machine-image-container">
                                    <img
                                        src="/hardness_diamond/sawband.png"
                                        alt="Vertical Band Saw"
                                        className="machine-image"
                                    />
                                </div>
                            </div>
                        </div>

                        <hr className="section-divider" />

                        {/* 3. Transparent Mould Making System */}
                        <div className="machine-section">
                            <h2 className="machine-name">Transparent Mould Making System</h2>
                            <div className="machine-content-wrapper">
                                <MachineImageCarousel
                                    images={transmountImages}
                                    altPrefix="Transparent Mould Making System"
                                />
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </section>
    );
}
