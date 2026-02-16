"use client";
import React from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import MachineImageCarousel from '@/components/MachineImageCarousel';

export default function AutoCutting() {
    const machines = [
        {
            name: "Automatic Cutting Machine (Precision)",
            model: "Autocut",
            description: "Designed for automatic precision cutting with advanced motion control.",
            images: [
                "/Cutting and sectioning/Autocut_main.png",
                "/Cutting and sectioning/autocut1.jpg",
                "/Cutting and sectioning/autocut2.jpg",
                "/Cutting and sectioning/autocut3.jpg",
                "/Cutting and sectioning/autocutp.png"
            ],
            capabilities: "Features motorized XYZ motions and automatic serial cutting.",
            precision: "Lateral X-axis positioning with 20 microns accuracy.",
            specs: [
                { label: "Motor Capacity", value: "5 HP" },
                { label: "Cutting Capacity", value: "80mm round" },
                { label: "Wheel Sizes", value: "250mm and 300mm diameter" },
                { label: "Speed Variation", value: "200 to 4000 rpm" },
                { label: "Auto Feed", value: "Job fed to the wheel at a rate of 0.1 mm to 10 mm per min" },
                { label: "Motor Height", value: "Adjustable and motorized" }
            ],
            features: "Includes a T-slotted bed with a swivelling option. It features laser marking for smart cutting feed. Equipped with a strainer for small cut sections and an anti-splash guard cum first sludge collector."
        },
        {
            name: "Metacut",
            model: "SACT 50/80",
            description: "A specialized machine for hardened cross-sections.",
            images: [
                "/Cutting and sectioning/metacut.png",
                "/Cutting and sectioning/metacut1.png",
                "/Cutting and sectioning/metacutwheel.png"
            ],
            capabilities: "Specifically mentions helical gear cutting for case depth inspection.",
            specs: [
                { label: "Capacity", value: "Cutting capacity of 50/80 mm diameter" },
                { label: "Motor", value: "Capacity of 5/10 HP. The motor is located outside the cutting chamber" }
            ],
            advancedFeatures: [
                "Features an XY Slide",
                "Optional automatic Hydraulic Technology",
                "Laser marking for precise positioning",
                "Specifically mentions helical gear cutting for case depth inspection"
            ]
        },
        {
            name: "Oscicut",
            model: "Oscillating Abrasive Cut-off Machine",
            description: "Available in manual or automatic versions for large cutting cross-sections.",
            images: [
                "/Cutting and sectioning/oscillating.png",
                "/Cutting and sectioning/oscillating2 img.png",
                "/Cutting and sectioning/oscillating3.png"
            ],
            capabilities: "Principle cutting motor is oscillated (to and fro) by a bottom oscillation motor with cam-based technology.",
            specs: [
                { label: "Oscillation Stroke", value: "120 mm" },
                { label: "Capacity", value: "120 mm to 160 mm" },
                { label: "Motor Capacity", value: "15 HP" }
            ],
            userExperience: "Cutting feed is controlled by a hand-operated wheel for effortless cutting of large work volumes. One can operate the machine with sitting comfort.",
            features: "Achieves minimal burn during the process. Includes a double parallel vice for large components."
        },
        {
            name: "Metacut L Series",
            model: "Large Component Cutting Machine",
            description: "Offers unique features to cut heavy, hardened components.",
            images: [
                "/Cutting and sectioning/metacutL10.png",
                "/Cutting and sectioning/metacutl15.png"
            ],
            models: [
                "Metacut L 10: 10 HP motor capacity with 100 mm cutting capacity",
                "Metacut L 15: 15 HP motor capacity with 120 mm cutting capacity"
            ],
            bedDesign: "T-slotted X-Y table measuring 450 mm x 450 mm",
            manualModes: [
                "Y-axis / Vertical (chop type)",
                "Y-axis (to and fro) and Z vertical, maneuvered by front wheels",
                "Effortless Z-motion via a large diameter wheel and lever/link mechanism",
                "Firm locking of wheel position avoids vibrations and wheel breakage"
            ],
            automaticMode: {
                type: "Y-axis Longitudinal cutting",
                stroke: "300 mm Y-axis (for cutting diameter 50 mm)",
                feed: "1 mm to 100 mm per minute (settable)",
                speed: "2800 rpm (variable speed optional)"
            },
            advancedLogic: [
                "Smart Cutting: Automatically reduces feed rate when encountering hard portions to reduce wheel damage",
                "Pulse Cutting: Offers pulse cutting for hardness variation in the job",
                "PLC Operation Panel: Allows for user-settable programs to optimize parameters like depth of cut, coolant flow, and number of cuts"
            ]
        },
        {
            name: "DCM",
            model: "Diamond Cutting Machine",
            description: "Precision sectioning for sensitive materials.",
            images: [
                "/Cutting and sectioning/diamond cutting.png",
                "/Cutting and sectioning/dcm2.png"
            ],
            applications: "Suitable for hard samples, nitriding layer protection, aluminum, and retained austenite estimation.",
            specs: [
                { label: "Blade Type", value: "Diamond Wafering Blades" },
                { label: "Diamond wheel thickness", value: "0.3 mm" },
                { label: "Speed", value: "200-500 rpm" }
            ]
        },
        {
            name: "Metacut / Metacut-I",
            model: "",
            description: "",
            images: [
                "/Cutting and sectioning/metcutauto.png",
                "/Cutting and sectioning/metcut.png"
            ],
            metacut: "3 HP motor with 40 mm diameter cutting capacity",
            metacutI: {
                description: "Features an automatic version for auto cutting in the Y direction",
                control: "PLC controlled program",
                stroke: "200 mm",
                feedRange: "0.1 mm to 5 mm per min"
            }
        }
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/auto_cutting">Cutting & Sectioning Machines</Link>
                    <span className="separator">/</span>
                    <span className="current-page">Machines</span>
                </div>
            </div>

            <main className="product-page-container">
                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">Cutting and Sectioning Machines</h1>

                    <div className="product-info-header">
                        <p>
                            Our comprehensive range of cutting and sectioning machines are designed for precision metallographic sample preparation. From high-accuracy automatic cutting to heavy-duty sectioning, we offer solutions for every application.
                        </p>
                    </div>

                    <div className="product-details-content">
                        {machines.map((machine, index) => (
                            <div key={index} className="machine-section">
                                <h2 className="machine-name">{machine.name}</h2>
                                {machine.model && <h3 className="machine-model">{machine.model}</h3>}

                                <div className="machine-content-wrapper">
                                    <MachineImageCarousel
                                        images={machine.images}
                                        altPrefix={`${machine.name} - ${machine.model}`}
                                    />

                                    <div className="machine-details">
                                        {machine.description && <p className="machine-description">{machine.description}</p>}

                                        {machine.capabilities && (
                                            <div className="machine-info-block">
                                                <h4>Cutting Action</h4>
                                                <p>{machine.capabilities}</p>
                                            </div>
                                        )}

                                        {machine.precision && (
                                            <div className="machine-info-block">
                                                <h4>Precision and Accuracy</h4>
                                                <p>{machine.precision}</p>
                                            </div>
                                        )}

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

                                        {machine.advancedFeatures && (
                                            <div className="machine-info-block">
                                                <h4>Advanced Features</h4>
                                                <ul className="feature-list">
                                                    {machine.advancedFeatures.map((feature, idx) => (
                                                        <li key={idx}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {machine.userExperience && (
                                            <div className="machine-info-block">
                                                <h4>User Experience</h4>
                                                <p>{machine.userExperience}</p>
                                            </div>
                                        )}

                                        {machine.models && (
                                            <div className="machine-info-block">
                                                <h4>Models</h4>
                                                <ul className="feature-list">
                                                    {machine.models.map((model, idx) => (
                                                        <li key={idx}>{model}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {machine.bedDesign && (
                                            <div className="machine-info-block">
                                                <h4>Bed Design</h4>
                                                <p>{machine.bedDesign}</p>
                                            </div>
                                        )}

                                        {machine.manualModes && (
                                            <div className="machine-info-block">
                                                <h4>Manual Cutting Modes</h4>
                                                <ul className="feature-list">
                                                    {machine.manualModes.map((mode, idx) => (
                                                        <li key={idx}>{mode}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {machine.automaticMode && (
                                            <div className="machine-info-block">
                                                <h4>Automatic Cutting Mode</h4>
                                                <ul className="specs-list">
                                                    <li><strong>Type:</strong> {machine.automaticMode.type}</li>
                                                    <li><strong>Cutting stroke:</strong> {machine.automaticMode.stroke}</li>
                                                    <li><strong>Cutting feed:</strong> {machine.automaticMode.feed}</li>
                                                    <li><strong>Cutting speed:</strong> {machine.automaticMode.speed}</li>
                                                </ul>
                                            </div>
                                        )}

                                        {machine.advancedLogic && (
                                            <div className="machine-info-block">
                                                <h4>Advanced Logic</h4>
                                                <ul className="feature-list">
                                                    {machine.advancedLogic.map((logic, idx) => (
                                                        <li key={idx}>{logic}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {machine.applications && (
                                            <div className="machine-info-block">
                                                <h4>Applications</h4>
                                                <p>{machine.applications}</p>
                                            </div>
                                        )}

                                        {machine.metacut && (
                                            <div className="machine-info-block">
                                                <h4>Metacut</h4>
                                                <p>{machine.metacut}</p>
                                            </div>
                                        )}

                                        {machine.metacutI && (
                                            <div className="machine-info-block">
                                                <h4>Metacut-I (Auto)</h4>
                                                <p>{machine.metacutI.description}</p>
                                                <ul className="specs-list">
                                                    <li><strong>Control:</strong> {machine.metacutI.control}</li>
                                                    <li><strong>Cutting stroke:</strong> {machine.metacutI.stroke}</li>
                                                    <li><strong>Feed range:</strong> {machine.metacutI.feedRange}</li>
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
