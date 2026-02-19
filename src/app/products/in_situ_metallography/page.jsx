"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function InSituMetallography() {
    const items = [
        {
            image: "/insitu/m1.png",
            title: "Item 1",
            description: "Description for item 1 coming soon."
        },
        {
            image: "/insitu/m2.png",
            title: "Item 2",
            description: "Description for item 2 coming soon."
        },
        {
            image: "/insitu/m3.png",
            title: "Item 3",
            description: "Description for item 3 coming soon."
        },

    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/in_situ_metallography">In-situ metallography kit</Link>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">In-situ metallography kit</h1>

                    <div className="product-info-header">
                        <p>
                            Our range of In-situ metallography kits for on-site metallographic examination and analysis.
                        </p>
                    </div>

                    <div className="product-details-content">
                        <div className="machine-images-grid">
                            {items.map((item, index) => (
                                <div key={index} className="machine-grid-item">
                                    <div className="machine-image-container">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="machine-image"
                                        />
                                    </div>
                                    <h3 className="machine-name">{item.title}</h3>
                                    <p className="machine-description">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
}
