
import Carousel from "@/components/Carousel";


export default function Home() {
  return (
    <main>
      <Carousel />

      <section className="about-section" id="about-us">
        <div className="about-content">
          <h2>Welcome to Metatech Industries</h2>
          <p>
            Metatech Industries has been a pioneer in delivering cutting-edge solutions for material science and metrology for over 38 years. Our commitment to innovation, precision, and customer satisfaction has made us a leader in the field. We offer the largest range of high-quality equipment, from sample preparation to advanced analytical instruments, designed to meet the rigorous demands of modern research and industrial applications.
          </p>
          <p>
            We pride ourselves on our deep industry knowledge, state-of-the-art technology, and a dedicated team that is passionate about helping our clients achieve their scientific and operational goals. Explore our products and services to see how Metatech Industries can empower your success.
          </p>
          <a href="#" className="cta-button">Learn More About Us</a>
        </div>
        <div className="about-image">
          <img src="images\38 years.png" alt="38 Years in Service, Largest Range" />
        </div>
      </section>
    </main>
  );
}
