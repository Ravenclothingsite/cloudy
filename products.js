export default function Products() {
  return (
    <div className="container">
      <h2>Featured Drops</h2>
      <div className="product-grid">
        <div className="product-card">
          <img src="/mock1.jpg" alt="Cloudy Tee" />
          <h3>Cloudy Tee</h3>
          <p>₹999</p>
        </div>
        <div className="product-card">
          <img src="/mock2.jpg" alt="Oversized Hoodie" />
          <h3>Oversized Hoodie</h3>
          <p>₹1499</p>
        </div>
      </div>
    </div>
  );
}