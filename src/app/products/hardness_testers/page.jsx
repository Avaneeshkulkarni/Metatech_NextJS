"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function HardnessTesters() {
    const images = [
        { src: "/hardness_tester/ht1.png", alt: "Hardness Tester 1" },
        { src: "/hardness_tester/ht2.png", alt: "Hardness Tester 2" },
        { src: "/hardness_tester/ht3.png", alt: "Hardness Tester 3" },
        { src: "/hardness_tester/ht4.png", alt: "Hardness Tester 4" },
        { src: "/hardness_tester/ht5.png", alt: "Hardness Tester 5" },
        { src: "/hardness_tester/ht6.png", alt: "Hardness Tester 6" }
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/hardness_testers">Hardness Testers</Link>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Hardness Testers</h1>

                    <div className="product-details-content">

                        <div className="machine-images-grid">
                            {images.map((img, index) => (
                                <div key={index} className="machine-grid-item">
                                    <div className="machine-image-container">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="machine-image"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <hr className="section-divider" />

                        <div className="machine-info-block">
                            <h4>Instruction</h4>
                            <p>
                                Hardness tester is used to determine the hardness of materials, and hardness test is a means to judge the quality of metal materials or parts of products. The so-called hardness is the ability of a material to resist the indentation of another body without residual deformation under certain conditions. The greater the resistance, the higher the hardness, and vice versa.
                            </p>
                        </div>

                        <hr className="section-divider" />

                        <div className="machine-info-block">
                            <h4>Application</h4>
                            <p>
                                Superficial Rockwell Hardness Tester suitable for measuring superficial rockwell hardness of Ferrous Metals, Alloy Steel, Carbide and Metal after treated surface (carburizing, nitriding, plating layer). Especially suitable for precision measurement of Parallel Planes.
                            </p>
                        </div>

                        <hr className="section-divider" />

                        <div className="machine-info-block">
                            <h4>Application Fields</h4>
                            <p>
                                Mainly used to determine the hardness of cast iron, steel, non-ferrous metals and soft alloys, and it can also be used to determine the hardness of some non-metallic materials such as hard plastics and Bakelite.
                            </p>
                        </div>

                    </div>
                </section>
            </main>
        </section>
    );
}

