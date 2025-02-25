import { useRouter } from "next/router";
import { useQuery } from "react-query";
import API from "../../utils/api";
import Link from "next/link";

export default function PriestProfile() {
  const router = useRouter();
  const { id } = router.query;

  const { data: priest, error, isLoading } = useQuery(["priest", id], () =>
    API.get(`/priests/${id}`).then((res) => res.data)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile</p>;

  return (
    <div>
      <header className="hero">
        <nav>
          <h1 className="logo">🛕 BookMyPriest</h1>
          <ul>
            <li><Link href="/priests">Find Priests</Link></li>
          </ul>
        </nav>
      </header>

      <section className="profile-container">
        <h1>{priest.name}</h1>
        <p>{priest.bio}</p>
        <p>Specialization: {priest.specialization}</p>
        <p>Location: {priest.location}</p>
        <p>Price: ₹{priest.pricePerSession}</p>
        <Link href={`/book/${id}`} className="btn">Book Now</Link>
      </section>
    </div>
  );
}
