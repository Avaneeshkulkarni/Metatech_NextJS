"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';

export default function CNCTensile() {
    // Placeholder image
    const [mainImage, setMainImage] = useState("/images/CNC Tensile NEW.png");

    // Placeholder images array (using same image for now to prevent errors)
    const images = [
        "/images/CNC Tensile NEW.png",
        "/images/CNC Tensile NEW.png",
        "/images/CNC Tensile NEW.png",
        "/images/CNC Tensile NEW.png"
    ];

    return (
        <section className="main-content-wrapper">
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="separator">/</span>
                    <Link href="/products/cnc_tensile">CNC & Laser Tensile Sample Prep</Link>
                </div>
            </div>

            <main className="product-page-container">

                <ProductSidebar />

                <section className="product-display">
                    <h1 className="main-product-heading">CNC & Laser Tensile Sample Prep</h1>

                    <div className="product-info-header">
                        <h2 id="product-name">CNC & Laser Tensile Sample Prep - Product Details</h2>
                        <p>
                            Detailed information about CNC & Laser Tensile Sample Prep. This section will contain specific technical details, features, and descriptions for the CNC & Laser Tensile Sample Prep product range.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    <div className="product-image-gallery">

                        <div className="product-thumbnails">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`View ${index + 1}`}
                                    className={`thumbnail ${mainImage === img ? 'active-thumb' : ''}`}
                                    onClick={() => setMainImage(img)}
                                />
                            ))}
                        </div>

                        <div className="product-main-image-container">
                            <img src={mainImage} alt="CNC & Laser Tensile Sample Prep Main View" id="main-product-image" />
                        </div>
                    </div>
                    <div className="product-details-content">

                        <h3 className="content-heading">Description</h3>
                        <p className="product-description-text">
                            Comprehensive description of the CNC & Laser Tensile Sample Prep. It is designed for high precision and durability in industrial applications.
                        </p>

                        <hr className="section-divider" />

                        <h3 className="content-heading">Key Features</h3>
                        <ul className="feature-list">
                            <li>High quality construction and durable design.</li>
                            <li>Advanced features for precision control.</li>
                            <li>Easy to operate and maintain.</li>
                            <li>Suitable for various industrial material science applications.</li>
                        </ul>

                    </div>
                </section>

            </main>
        </section>
    );
}
