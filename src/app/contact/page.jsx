"use client";
import { useState } from 'react';

export default function Contact() {
    const [activeTopic, setActiveTopic] = useState("Product Enquiry");
    const topics = [
        "Product Enquiry",
        "Request demo",
        "Product info / Support",
        "Working with you",
        "General information",
        "Other"
    ];

    return (
        <section className="main-content-wrapper contact-page-wrapper">
            <div className="contact-form-container">

                <h1 className="contact-heading">Contact US</h1>
                <p className="contact-intro-text">
                    Got a question, or interested in learning more about Metatech Industries? Let us know how we
                    can help. Choose your topic of interest, fill in your details, and we'll get back to you as
                    soon as possible. We look forward to connecting.
                </p>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <h3 className="topic-heading">I'm interested in ...</h3>
                    <div className="topic-buttons-container">
                        {topics.map((topic) => (
                            <button
                                key={topic}
                                type="button"
                                className={`topic-button ${activeTopic === topic ? 'active-topic' : ''}`}
                                onClick={() => setActiveTopic(topic)}
                                suppressHydrationWarning
                            >
                                {topic}
                            </button>
                        ))}
                    </div>

                    <div className="input-line-group">
                        <label>Hello, my name is</label>
                        <input type="text" placeholder="Full name" className="underline-input large-input" required suppressHydrationWarning />
                    </div>

                    <div className="input-line-group inline-inputs">
                        <label>I'm working as</label>
                        <input type="text" placeholder="Job Title" className="underline-input medium-input" required suppressHydrationWarning />
                        <label>at</label>
                        <input type="text" placeholder="Company" className="underline-input large-input" required suppressHydrationWarning />
                    </div>

                    <div className="input-line-group">
                        <label>You can reach me at</label>
                        <input type="email" placeholder="Email Address" className="underline-input large-input" required suppressHydrationWarning />
                    </div>

                    <div className="input-line-group">
                        <label>My message is about</label>
                        <textarea placeholder="Write your message here..." className="textarea-input" suppressHydrationWarning></textarea>
                    </div>

                    <button type="submit" className="submit-button cta-button" suppressHydrationWarning>Submit Request</button>

                </form>
            </div>
        </section>
    );
}
