"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import MachineImageCarousel from '@/components/MachineImageCarousel';

export default function ManualCutting() {
    const images = [
        "/images/Autocut S New Machine.png",
        "/images/Metacut DCM New New.png",
        "/images/Cutting Machin OLD 2 copy.png",
        "/images/Metatech CNC final.png"
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/auto_cutting">Cutting Machine</Link>
                    <span className="separator">/</span>
                    <span className="current-page">Manual Cut</span>
                </div>
            </div>

            <main className="product-page-container">

                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Cutting and Sectioning Machines</h1>

                    <div className="product-info-header">
                        <h2 id="product-name">Manual Cutting Machine (Manual)</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>

                    <div className="product-image-gallery-carousel">
                        <MachineImageCarousel
                            images={images}
                            altPrefix="Manual Cutting Machine"
                        />
                    </div>
                    <div className="product-details-content">

                        <h3 className="content-heading">Detailed Product Description</h3>
                        <p className="product-description-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>

                        <hr className="section-divider" />

                        <h3 className="content-heading">Key Features</h3>
                        <ul className="feature-list">
                            <li>**Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>**Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>**Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>**Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>**Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        </ul>

                        <hr className="section-divider" />

                        <h3 className="content-heading">Tech Notes</h3>
                        <div className="tech-notes-container">
                            <span className="tech-note-bubble">The standard Lorem Ipsum passage, used since the 1500s</span>
                            <span className="tech-note-bubble">The standard Lorem Ipsum passage, used since the 1500s</span>
                            <span className="tech-note-bubble">The standard Lorem Ipsum passage, used since the 1500s</span>
                            <span className="tech-note-bubble">PThe standard Lorem Ipsum passage, used since the 1500s</span>
                            <span className="tech-note-bubble">The standard Lorem Ipsum passage, used since the 1500s</span>
                        </div>

                        <hr className="section-divider" />

                        <h3 className="content-heading consumables-title">Consumables Required</h3>
                        <div className="consumables-grid">

                            <div className="consumable-item">
                                <img src="/images/Cutting Machin OLD 2 copy.png" alt="Abrasive Cutting Wheel" className="consumable-image" />
                                <p className="consumable-name">Abrasive Cutting Wheels</p>
                            </div>

                            <div className="consumable-item">
                                <img src="/images/Component Cleaning.png" alt="Cooling Fluid" className="consumable-image" />
                                <p className="consumable-name">Cooling Fluid / Inhibitor</p>
                            </div>

                            <div className="consumable-item">
                                <img src="/images/tech notes.jpeg" alt="Filter Paper" className="consumable-image" />
                                <p className="consumable-name">Recirculation Filter Paper</p>
                            </div>

                            <div className="consumable-item">
                                <img src="/images/tech notes.jpeg" alt="Filter Paper" className="consumable-image" />
                                <p className="consumable-name">Recirculation Filter Paper</p>
                            </div>

                            <div className="consumable-item">
                                <img src="/images/tech notes.jpeg" alt="Filter Paper" className="consumable-image" />
                                <p className="consumable-name">Recirculation Filter Paper</p>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </section>
    );
}
