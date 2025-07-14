import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <header className="hero">
        <h1>CLOUDY</h1>
        <p className="tagline">Streetwear for dreamers</p>
        <Link href="/products" className="button">Shop Now</Link>
      </header>
    </div>
  );
}