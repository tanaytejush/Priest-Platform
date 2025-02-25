import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Book a Priest for Your Ceremonies</h1>
        <p className="text-lg mb-6">Find experienced priests for weddings, poojas, and rituals.</p>
        <Link href="/priests">
          <button className="bg-white text-blue-600 px-6 py-3 rounded shadow-lg">
            Find a Priest
          </button>
        </Link>
      </header>
    </div>
  );
}
