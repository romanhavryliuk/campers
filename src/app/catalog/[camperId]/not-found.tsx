import Link from "next/link";

export default function CamperNotFound() {
  return (
    <div>
      <h2>Camper not found</h2>
      <p>The camper you are looking for does not exist.</p>
      <Link href="/catalog">Back to catalog</Link>
    </div>
  );
}
