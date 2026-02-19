"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import MachineImageCarousel from '@/components/MachineImageCarousel';

export default function MouldingMachine() {
    const machines = [
        {
            name: "Electro Press",
            description: "Complete electro mechanical operation.",
            images: ["/moulding/electropress1.png",
                "/moulding/electropress2.png"
            ],
            imageCaption: "Automount E"
        },
        {
            name: "Electro Hydraulic Press",
            description: "Four mould capability with dual mould cylinder.",
            image: "/moulding/automounteh.png",
            specs: [
                { label: "Pressure", value: "300 Bar" }
            ],
            features: "Four samples at a time for better through put for auto grinder polisher.",
            imageCaption: "Automount EH"
        },
        {
            name: "Pneumatic Press",
            image: "/moulding/automount.png",
            imageCaption: "Automount"
        }
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/moulding">Moulding Machine</Link>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Moulding Machines</h1>

                    <div className="product-info-header">
                        <p>
                            Our range of moulding machines designed for precision sample preparation in metallographic applications.
                        </p>
                    </div>

                    <div className="product-details-content">
                        {machines.map((machine, index) => (
                            <div key={index} className="machine-section">
                                <h2 className="machine-name">{machine.name}</h2>

                                <div className="machine-content-wrapper">
                                    <div className="machine-image-container">
                                        {machine.images ? (
                                            <MachineImageCarousel images={machine.images} altPrefix={machine.name} />
                                        ) : (
                                            <img
                                                src={machine.image}
                                                alt={machine.name}
                                                className="machine-image"
                                            />
                                        )}
                                        {machine.imageCaption && (
                                            <p className="image-caption">{machine.imageCaption}</p>
                                        )}
                                    </div>

                                    <div className="machine-details">
                                        {machine.description && <p className="machine-description">{machine.description}</p>}

                                        {machine.specs && machine.specs.length > 0 && (
                                            <div className="machine-info-block">
                                                <h4>Technical Specifications</h4>
                                                <ul className="specs-list">
                                                    {machine.specs.map((spec, idx) => (
                                                        <li key={idx}>
                                                            <strong>{spec.label}:</strong> {spec.value}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {machine.features && (
                                            <div className="machine-info-block">
                                                <h4>Key Features</h4>
                                                <p>{machine.features}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {index < machines.length - 1 && <hr className="section-divider" />}
                            </div>
                        ))}

                        <hr className="section-divider" />

                        <div style={{ textAlign: 'center', marginTop: '30px' }}>
                            <Link href="/products/moulding/consumables" className="cta-button" style={{ display: 'inline-block', padding: '12px 30px', backgroundColor: 'var(--accent-color)', color: 'white', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '16px' }}>
                                View Moulding Consumables →
                            </Link>
                        </div>

                    </div>
                </section>

            </main>
        </section>
    );
}
