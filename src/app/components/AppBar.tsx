import Link from "next/link";

export default function AppBar() {
  return (
    <header className="bg-bluePalette-700 text-white">
      <nav className="w-full mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Solace Portal</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
