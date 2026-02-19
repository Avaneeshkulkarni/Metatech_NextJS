"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import MachineImageCarousel from '@/components/MachineImageCarousel';

export default function InSituConsumables() {
    const contaminationImages = [
        "/insitu/contamination1.png",
        "/insitu/contamination2.png",
        "/insitu/contamination3.png",
        "/insitu/contamination4.png",
    ];

    const gritTable = {
        headers: ["Standard", "60", "80", "120", "180", "240", "320", "400", "600", "800", "1200"],
        rows: [
            ["US (CAMI)", "60", "80", "120", "180", "240", "320", "400", "600", "800", "1200"],
            ["P GRADE (FEPA) Europe", "P60", "P80", "P120", "P180", "P220", "P500", "P800", "P1200", "P2400", "P4000"],
            ["MICRON SIZE", "268", "192", "125", "76", "52", "35", "22", "14", "10", "5"],
        ]
    };

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/in_situ_metallography">In-situ Metallography Kit</Link>
                    <span className="separator">/</span>
                    <span className="current-page">Consumables</span>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">IN-SITU METALLOGRAPHY KIT CONSUMABLES</h1>

                    <div className="product-details-content">

                        {/* 1. Grinding Discs & Polishing Cloths */}
                        <div className="machine-section">
                            <h2 className="machine-name">Grinding Discs & Polishing Cloths</h2>
                            <div className="machine-content-wrapper">
                                <div className="machine-image-container">
                                    <img
                                        src="/insitu/grindingdisc.png"
                                        alt="Grinding Discs & Polishing Cloths"
                                        className="machine-image"
                                    />
                                </div>
                                <div className="machine-details">
                                    <p className="machine-description">
                                        Various grinding discs of grit sizes 80, 120, 180, 240,
                                        320, 400, 600, 800, 1000, 1200 and cloths with PSA back.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className="section-divider" />

                        {/* 2. Replica */}
                        <div className="machine-section">
                            <h2 className="machine-name">Replica</h2>
                            <div className="machine-content-wrapper">
                                <div className="machine-image-container">
                                    <img
                                        src="/insitu/replica.png"
                                        alt="Replica"
                                        className="machine-image"
                                    />
                                </div>
                                <div className="machine-details">
                                    <p className="machine-description">
                                        Transparent replica / tape Reflecting replicas. These are backed by reflecting aluminum
                                        foil and are of green colour. Reflecting foil improves the light gain of microscope and
                                        green colour improves the contrast while observation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className="section-divider" />

                        {/* 3. Etching Chemical */}
                        <div className="machine-section">
                            <h2 className="machine-name">Etching Chemical</h2>
                            <div className="machine-content-wrapper">
                                <div className="machine-details">
                                    <ul className="specs-list">
                                        <li>Nitric Acid</li>
                                        <li>Hydrochloric Acid</li>
                                        <li>Acetone</li>
                                        <li>Methanol</li>
                                        <li>Ethanol</li>
                                        <li>Picric Acid etc.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <hr className="section-divider" />

                        {/* 4. Millipore Fluid Contamination Analysis Kit */}
                        <div className="machine-section">
                            <h2 className="machine-name">Millipore Fluid Contamination Analysis Kit</h2>
                            <div className="machine-content-wrapper">
                                <MachineImageCarousel
                                    images={contaminationImages}
                                    altPrefix="Millipore Fluid Contamination Analysis Kit"
                                />
                                <div className="machine-details">
                                    <ul className="specs-list">
                                        <li>Vacuum / Pressure Pump</li>
                                        <li>Dispensing Pressure Vessel</li>
                                        <li>Filter Jet Solvent Dispenser</li>
                                        <li>Petri Slides</li>
                                        <li>Filter Paper</li>
                                        <li>Filter Flask</li>
                                        <li>Dispensing Bottles</li>
                                        <li>Solvent Filtering Dispenser</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <hr className="section-divider" />

                        {/* 5. Portable Hydraulic Brinell Hardness Tester */}
                        <div className="machine-section">
                            <h2 className="machine-name">Portable Hydraulic Brinell Hardness Tester</h2>
                            <div className="machine-content-wrapper">
                                <div className="machine-image-container">
                                    <img
                                        src="/insitu/portable.png"
                                        alt="Portable Hydraulic Brinell Hardness Tester"
                                        className="machine-image"
                                    />
                                </div>
                                <div className="machine-details">
                                    <div className="machine-info-block">
                                        <h4>APPLICATION</h4>
                                        <ul className="specs-list">
                                            <li>On-site test of steel products, nonferrous metal, castings, forgings, and semi-finished heat treatment parts.</li>
                                            <li>Applied to too large parts for desk testers to test. Replace Leeb testers which are in low accuracy and reliability.</li>
                                            <li>Indentation could be read by indentation automatic measurement system and hardness valves displayed directly.</li>
                                        </ul>
                                    </div>
                                    <p className="machine-description">
                                        Wet/dry Silicon Carbide C Weight Abrasive Grinding Discs Manufactured in North America and are classified to US standards. FEPA is grit classification according to abrasive manufactured in Europe and are classified to European standards.
                                    </p>
                                </div>
                            </div>

                            <div className="machine-info-block" style={{ marginTop: '1.5rem' }}>
                                <h4>Grit Size Comparison Table</h4>
                                <div style={{ overflowX: 'auto' }}>
                                    <table className="specs-table">
                                        <thead>
                                            <tr>
                                                {gritTable.headers.map((header, idx) => (
                                                    <th key={idx}>{header}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {gritTable.rows.map((row, rowIdx) => (
                                                <tr key={rowIdx}>
                                                    {row.map((cell, cellIdx) => (
                                                        <td key={cellIdx}>{cell}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </section>
    );
}
