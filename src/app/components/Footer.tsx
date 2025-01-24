export default function Footer() {
  return (
    <footer className="bg-bluePalette-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Max Stein-Golenbock. Solace Take-Home
          Assignment.
        </p>
        <p className="text-sm mt-2">
          Built with ❤️ and <span className="font-bold">Next.js</span>.
        </p>
      </div>
    </footer>
  );
}
