"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function HardnessTestBlocks() {
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

                    <div className="product-info-header">
                        <p>
                            Product description for Hardness Test Blocks Diamond Indenters.
                        </p>
                    </div>

                    <div className="product-details-content">
                        <div className="machine-section">
                            <h2 className="machine-name">Hardness Test Blocks Diamond Indenters</h2>
                            <div className="machine-content-wrapper">
                                <div className="machine-image-container">
                                    <img
                                        src="/images/logo.png" // Placeholder
                                        alt="Hardness Test Blocks Diamond Indenters"
                                        className="machine-image"
                                    />
                                </div>
                                <div className="machine-details">
                                    <p className="machine-description">Detailed description coming soon.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
}
