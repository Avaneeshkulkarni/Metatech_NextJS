
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
                <li className={`category-item ${isCategoryActive(['/products/auto_cutting', '/products/auto_cutting/consumables'])}`}>
                    <a href="#">Cutting and Sectioning Machine</a>
                    <ul className="sub-category-menu">
                        <li><Link href="/products/auto_cutting" className={isActive('/products/auto_cutting')}>Machines</Link></li>
                        <li><Link href="/products/auto_cutting/consumables" className={isActive('/products/auto_cutting/consumables')}>Consumables</Link></li>
                    </ul>
                </li>
                <li className={`category-item ${isCategoryActive(['/products/moulding', '/products/moulding/consumables'])}`}>
                    <a href="#">Moulding Machine</a>
                    <ul className="sub-category-menu">
                        <li><Link href="/products/moulding" className={isActive('/products/moulding')}>Machines</Link></li>
                        <li><Link href="/products/moulding/consumables" className={isActive('/products/moulding/consumables')}>Consumables</Link></li>
                    </ul>
                </li>
                <li className={`category-item ${isCategoryActive(['/products/grinding_polishing', '/products/grinding_polishing/machines', '/products/grinding_polishing/grinding_consumables', '/products/grinding_polishing/polishing_consumables'])}`}>
                    <a href="#">Grinding & Polishing</a>
                    <ul className="sub-category-menu">
                        <li><Link href="/products/grinding_polishing/machines" className={isActive('/products/grinding_polishing/machines')}>Machines</Link></li>
                        <li><Link href="/products/grinding_polishing/grinding_consumables" className={isActive('/products/grinding_polishing/grinding_consumables')}>Grinding Consumables</Link></li>
                        <li><Link href="/products/grinding_polishing/polishing_consumables" className={isActive('/products/grinding_polishing/polishing_consumables')}>Polishing Consumables</Link></li>
                    </ul>
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
                    <Link href="/products/jominey" className={isActive('/products/jominey')}>Jominey End Quench Hardenability Set-up</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/consumables" className={isActive('/products/consumables')}>Metallography Consumables</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/in_situ_metallography" className={isActive('/products/in_situ_metallography')}>In-situ metallography kit</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/hardness_testers" className={isActive('/products/hardness_testers')}>Hardness Testers</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/hardness_test_blocks" className={isActive('/products/hardness_test_blocks')}>Hardness Test Blocks Diamond Indenters</Link>
                </li>
                <li className="category-item">
                    <Link href="/products/cnc_tensile" className={isActive('/products/cnc_tensile')}>CNC Tensile Sample Preparation</Link>
                </li>
            </ul>
        </aside>
    );
}
