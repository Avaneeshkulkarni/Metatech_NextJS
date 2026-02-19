"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import MachineImageCarousel from '@/components/MachineImageCarousel';

export default function GrindingPolishingMachines() {
    const machines = [
        {
            name: "Metapol DC II",
            description: "Manual grinding / polishing machine",
            images: ["/grinding_polishing/metapoldc2.png", "/grinding_polishing/metapoldc21.png"],
            specs: [
                { label: "Disc diameter", value: "200/250 mm" },
                { label: "Optional Magnetic Fixation", value: "" }
            ]
        },
        {
            name: "Belt Grinder",
            specs: [
                { label: "Belt size", value: "4\" x 9\"" },
                { label: "Motor", value: "1/2 hp. AC" },
                { label: "Dry operation", value: "" },
                { label: "Easy belt replacement", value: "" },
                { label: "Optional Suction arrangement for dust", value: "" }
            ],
            captionedImages: [
                { src: "/grinding_polishing/mgb1.png", caption: "MBG I" },
                { src: "/grinding_polishing/mgb2.png", caption: "MBG II" }
            ]
        },
        {
            name: "Heavy Duty Belt Grinder",
            image: "/grinding_polishing/heavybelt.png",
            specs: [
                { label: "Belt size", value: "150 x 2000" },
                { label: "Motor", value: "3 hp" },
                { label: "Twin rpm", value: "1800 / 2400" },
                { label: "V Belt driven", value: "" },
                { label: "Suction Facility", value: "" },
                { label: "With guards and starter, belt tracking and tensioning system", value: "" }
            ]
        },
        {
            name: "Spectro Grinding Machine",
            captionedImages: [
                { src: "/grinding_polishing/heavyduty.png", caption: "Heavy duty" },
                { src: "/grinding_polishing/lightduty.png", caption: "Light duty" }
            ]
        },
        {
            name: "Automatic Spectro Sample Grinding Machine",
            model: "Model Spectro Pol (Auto)",
            images: ["/grinding_polishing/spectropol1.png", "/grinding_polishing/spectropol2.png", "/grinding_polishing/spectropol3.png"],
            specs: [
                { label: "Number of samples produced", value: "Three at a time" },
                { label: "Belt size", value: "200 x 2000 mm" },
                { label: "Sample grinding force", value: "Pneumatic" },
                { label: "Sample attaching / releasing", value: "Electro Magnetic" },
                { label: "Operation panel", value: "HMI and PLC" },
                { label: "Electrical supply", value: "1 phase" }
            ]
        },
        {
            name: "Semi Automatic Grinding Polishing Machine",
            specs: [
                { label: "Independent force on the Specimen", value: "" },
                { label: "Six specimens at a time", value: "" },
                { label: "Pneumatic or electrical operation", value: "" },
                { label: "PLC based programmable operation panel", value: "" }
            ],
            captionedImages: [
                {
                    caption: "Model - Autopol",
                    images: ["/grinding_polishing/autopol1.png", "/grinding_polishing/autopol2.png", "/grinding_polishing/autopol3.png"]
                },
                {
                    caption: "Model - Autopol Dual",
                    images: ["/grinding_polishing/autopol_dual1.png", "/grinding_polishing/autopol_dual2.png"]
                }
            ]
        },
        {
            name: "Multi-specimen Grinding / Polishing Machine",
            description: "Auto grinding Arm mounted on Dual Pillar for attaining better flatness to the sample",
            images: [
                "/grinding_polishing/autopol-II1.png",
                "/grinding_polishing/autopol-II2.png",
                "/grinding_polishing/autopol-II3.png"
            ],
            specs: [
                { label: "Discs options", value: "200 mm, 250 mm, 300 mm" },
                { label: "Double pillar structure for complete flatness of sample", value: "" },
                { label: "Heavy duty motors", value: "1 HP main and 184 watts power head" },
                { label: "Six specimens at a time", value: "" },
                { label: "Independent force on the Specimen", value: "" },
                { label: "Combined Force", value: "" },
                { label: "Good Edge Retention", value: "" },
                { label: "Unmounted specimens grinding possible", value: "(feasibility study required before hand)" }
            ]
        }
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/grinding_polishing">Grinding & Polishing</Link>
                    <span className="separator">/</span>
                    <span className="current-page">Machines</span>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Grinding & Polishing Machines</h1>

                    <div className="product-info-header">
                        <p>
                            Our comprehensive range of grinding and polishing machines for precision metallographic sample preparation.
                        </p>
                    </div>

                    <div className="product-details-content">
                        {machines.map((machine, index) => (
                            <div key={index} className="machine-section">
                                <h2 className="machine-name">{machine.name}</h2>
                                {machine.model && <h3 className="machine-model">{machine.model}</h3>}

                                <div className="machine-content-wrapper">
                                    {/* Single image */}
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

                                    {/* Captioned images: either simple {src, caption} or nested {caption, images[]} */}
                                    {machine.captionedImages && (
                                        <div className="machine-images-grid">
                                            {machine.captionedImages.map((img, imgIdx) => (
                                                <div key={imgIdx} className="machine-image-container">
                                                    {img.images ? (
                                                        <>
                                                            <MachineImageCarousel images={img.images} altPrefix={`${machine.name} - ${img.caption}`} />
                                                            <p className="image-caption">{img.caption}</p>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <img
                                                                src={img.src}
                                                                alt={`${machine.name} - ${img.caption}`}
                                                                className="machine-image"
                                                            />
                                                            <p className="image-caption">{img.caption}</p>
                                                        </>
                                                    )}
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
                                                            {spec.value ? (
                                                                <><strong>{spec.label}:</strong> {spec.value}</>
                                                            ) : (
                                                                <span>{spec.label}</span>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
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
