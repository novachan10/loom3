// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Your Company</div>
        <div className="space-x-4">
        <Link href="/some-page">
  <a>Click me</a> {/* Pastikan elemen <a> tidak ada di sini */}
</Link>
          <Link href="/for-business" passHref>
            <a className="hover:text-blue-500">For Business</a>
          </Link>
          <Link href="/resources" passHref>
            <a className="hover:text-blue-500">Resources</a>
          </Link>
          <Link href="/company" passHref>
            <a className="hover:text-blue-500">Company</a>
          </Link>
          <Link href="/pricing" passHref>
            <a className="hover:text-blue-500">Pricing</a>
          </Link>
          <Link href="/contact-sales" passHref>
            <a className="hover:text-blue-500">Contact Sales</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
