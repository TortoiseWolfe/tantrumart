import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">TantrumArt</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">TantrumArt</h1>
          <p className="hero-subtitle">Contemporary Art Collection</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Explore Gallery</button>
            <button className="btn btn-secondary">Commission Work</button>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="arrow-down"></div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview" id="gallery">
        <div className="container">
          <h2>Featured Artworks</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="placeholder-image">Artwork 1</div>
              <h3>Ethereal Dreams</h3>
              <p>Oil on Canvas, 2024</p>
            </div>
            <div className="gallery-item">
              <div className="placeholder-image">Artwork 2</div>
              <h3>Urban Rhythm</h3>
              <p>Mixed Media, 2024</p>
            </div>
            <div className="gallery-item">
              <div className="placeholder-image">Artwork 3</div>
              <h3>Color Symphony</h3>
              <p>Acrylic, 2024</p>
            </div>
            <div className="gallery-item">
              <div className="placeholder-image">Artwork 4</div>
              <h3>Abstract Motion</h3>
              <p>Digital Art, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About the Artist</h2>
              <p>
                Welcome to TantrumArt, where contemporary expression meets timeless beauty. 
                Each piece is a journey through color, emotion, and movement, crafted to 
                transform spaces and inspire viewers.
              </p>
              <p>
                Specializing in abstract and contemporary works, TantrumArt explores the 
                boundaries between chaos and harmony, creating pieces that speak to the 
                soul while challenging the mind.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">Artist Photo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Interested in commissioning a piece or have questions about available works?</p>
          <div className="contact-buttons">
            <button className="btn btn-primary">Send Message</button>
            <button className="btn btn-secondary">View Instagram</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 TantrumArt. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App