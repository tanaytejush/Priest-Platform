import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="hero">
        <nav>
          <h1 className="logo">🛕 BookMyPriest</h1>
          <ul>
            <li><Link href="/priests">Find Priests</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/admin">Admin Panel</Link></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Find Experienced Priests for Your Ceremonies</h1>
          <p>Book priests for weddings, poojas, and more.</p>
          <Link href="/priests">
            <button className="btn">Browse Priests</button>
          </Link>
        </div>
      </header>
    </div>
  );
}
