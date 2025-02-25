import { useQuery } from "react-query";
import API from "../../utils/api";
import Link from "next/link";

export default function Priests() {
  const { data, error, isLoading } = useQuery("priests", () =>
    API.get("/priests").then((res) => res.data)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading priests</p>;

  return (
    <div>
      <header className="hero">
        <nav>
          <h1 className="logo">🛕 BookMyPriest</h1>
          <ul>
            <li><Link href="/">Home</Link></li>
          </ul>
        </nav>
        <h1>Available Priests</h1>
      </header>

      <section className="priests-container">
        {data.map((priest) => (
          <div key={priest._id} className="priest-card">
            <h3>{priest.name}</h3>
            <p>Specialization: {priest.specialization}</p>
            <p>Price: ₹{priest.pricePerSession}</p>
            <Link href={`/priests/${priest._id}`} className="btn">View Profile</Link>
          </div>
        ))}
      </section>
    </div>
  );
}
