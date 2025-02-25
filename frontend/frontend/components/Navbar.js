import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          🛕 Priest Booking
        </Link>
        <div className="space-x-6">
          <Link href="/priests" className="text-gray-700 hover:text-blue-600">
            Find Priests
          </Link>
          <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
          <Link href="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
