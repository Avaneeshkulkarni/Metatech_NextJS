
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProductSidebar() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path ? "active-sub" : "";
    const isCategoryActive = (paths) => paths.some(path => pathname === path) ? "category-active" : "";

    return (
        <aside className="product-sidebar">
            <h3>Product Categories</h3>
            <ul className="category-menu">
                <li className={`category-item ${isCategoryActive(['/products/auto_cutting', '/products/manual_cutting'])}`}>
                    <a href="#">Cutting Machine</a>
                    <ul className="sub-category-menu">
                        <li><Link href="/products/manual_cutting" className={isActive('/products/manual_cutting')}>Manual Machine</Link></li>
                        <li><Link href="/products/auto_cutting" className={isActive('/products/auto_cutting')}>Automatic Machine</Link></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a href="#">Sectioning Machine</a>
                    <ul className="sub-category-menu">
                        <li><Link href="/products/manual_cutting" className={isActive('/products/manual_cutting')}>Manual Machine</Link></li>
                        <li><Link href="/products/auto_cutting" className={isActive('/products/auto_cutting')}>Automatic Machine</Link></li>
                    </ul>
                </li>
                <li className="category-item">
                    <Link href="/products/moulding" className={isActive('/products/moulding')}>Moulding Machine</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/grinding_polishing" className={isActive('/products/grinding_polishing')}>Grinding & Polishing</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/electropolishing" className={isActive('/products/electropolishing')}>ElectroPolishing</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/microscope" className={isActive('/products/microscope')}>Microscope & Image Analyzer</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/particle_analysis" className={isActive('/products/particle_analysis')}>Particle Size Analysis</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/microhardness" className={isActive('/products/microhardness')}>Microhardness Testers</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/jominey" className={isActive('/products/jominey')}>Jominey & Insitu Setup</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/ecm" className={isActive('/products/ecm')}>ECM</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/cnc_tensile" className={isActive('/products/cnc_tensile')}>CNC & Laser Tensile</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/consumables" className={isActive('/products/consumables')}>Consumables</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/tech_notes" className={isActive('/products/tech_notes')}>Tech Notes</Link>
                </li>
            </ul>
        </aside>
    );
}
