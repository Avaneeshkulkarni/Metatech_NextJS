"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import MachineImageCarousel from '@/components/MachineImageCarousel';

export default function Microscope() {
    const machines = [
        {
            name: "Inverted Microscope",
            captionedImages: [
                { src: "/microscope/metagraph.png", caption: "Metagraph-1" },
                { src: "/microscope/metagraphspl.png", caption: "Metagraph - SPL" }
            ]
        },
        {
            name: "Upright Microscope",
            image: "/microscope/uprightmsc.png"
        },
        {
            name: "Stereo Microscope",
            image: "/microscope/stereomsc.png"
        },
        {
            name: "Particle Size Analysis System",
            description: "Cleanliness Analysis for Contamination Estimation",
            specs: [
                { label: "Compliance", value: "Fully compliant with the latest standards (ISO 16232 )" },
                { label: "System Type", value: "Automatic system with complete filter paper scanning , classifying non metallic , metallic and fiber particles and measuring their size." },
                { label: "Stage", value: "Motorized Stage." },
                { label: "Microscope Options", value: "Options with stereo and metallurgical microscopes" },
                { label: "Measurement", value: "Measurement of height of particle." },
                { label: "Usability", value: "Easy to use and quick to perform." },
                { label: "Reporting", value: "Report generation as per User's requirement" }
            ],
            captionedImages: [
                {
                    src: "/microscope/stereomsc2.png",
                    caption: "A] Stereo",
                    subCaption: "for Particle Size greater than 10 microns"
                },
                {
                    src: "/microscope/metallurgical.png",
                    caption: "B] Metallurgical",
                    subCaption: "for Particle Size greater than 3 microns"
                }
            ]
        },
        {
            name: "Millipore Fluid Contamination Analysis Kit",
            images: ["/microscope/mfca1.png",
                "/microscope/mfca2.png",
                "/microscope/mfca3.png",
                "/microscope/mfca4.png",
                "/microscope/mfca5.png"
            ],
            features: "Vacuum / Pressure Pump, Dispensing Pressure Vessel, Filter Paper, Filter Flask, Filter Jet Solvent Dispenser, Petri Slides, Dispensing Bottles, Solvent Filtering Dispenser"
        },
        {
            name: "Component Cleaning System",
            image: "/microscope/componentcleaning.png",
            description: "Component cleaning system for filter paper analysis / cleanness or particle size estimation.",
            features: "Auto filtration of cleaning fluid with various filters. PLC based automation program and touch screen HMI"
        },
        {
            name: "Image Analyser",
            image: "/microscope/imganalyzer.png"
        }
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/microscope">Microscope & Image Analyzer</Link>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Microscope & Image Analyzer</h1>

                    <div className="product-info-header">
                        <p>
                            Advanced microscopy and image analysis solutions for precise material characterization and contamination analysis.
                        </p>
                    </div>

                    <div className="product-details-content">
                        {machines.map((machine, index) => (
                            <div key={index} className="machine-section">
                                <h2 className="machine-name">{machine.name}</h2>

                                <div className="machine-content-wrapper">
                                    {/* Single image display */}
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

                                    {/* Captioned images grid */}
                                    {machine.captionedImages && (
                                        <div className="machine-images-grid">
                                            {machine.captionedImages.map((img, imgIdx) => (
                                                <div key={imgIdx} className="machine-image-container">
                                                    <img
                                                        src={img.src}
                                                        alt={`${machine.name} - ${img.caption}`}
                                                        className="machine-image"
                                                    />
                                                    {img.caption && <p className="image-caption">{img.caption}</p>}
                                                    {img.subCaption && <p className="image-sub-caption">{img.subCaption}</p>}
                                                </div>
                                            ))}
                                        </div>
                                    )}

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

                    </div>
                </section>

            </main>
        </section>
    );
}
