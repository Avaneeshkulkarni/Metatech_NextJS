"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function GrindingPolishing() {
    const subPages = [
        { href: "/products/grinding_polishing/machines", title: "Machines", description: "View our complete range of grinding and polishing machines." },
        { href: "/products/grinding_polishing/grinding_consumables", title: "Grinding Consumables", description: "Grinding papers, discs and related consumables." },
        { href: "/products/grinding_polishing/polishing_consumables", title: "Polishing Consumables", description: "Polishing cloths, suspensions and related consumables." }
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/grinding_polishing">Grinding & Polishing</Link>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Grinding & Polishing</h1>

                    <div className="product-info-header">
                        <p>
                            Our comprehensive range of grinding and polishing machines and consumables for precision metallographic sample preparation.
                        </p>
                    </div>

                    <div className="product-details-content">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
                            {subPages.map((page, index) => (
                                <Link key={index} href={page.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '30px', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer', backgroundColor: 'white', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-color)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'inherit'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>{page.title}</h3>
                                        <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{page.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
}

