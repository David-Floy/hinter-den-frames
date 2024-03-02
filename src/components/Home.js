import React from 'react';
import './Home.css';

function Home() {
    
    function toggleText() {
      let text = document.getElementById("klapptext");
      if (text.style.opacity === "0") {
        text.style.opacity = "1";
      } else {
        text.style.opacity = "0";
      }
    }
  
    return (
    <div>
        <div className="header">
          <a href="https://www.google.de/" className="blog-title">Hinter den Frames &copy;</a>
          <div>
            <a href="#" className="nav-button">Alle  Blogposts</a>
            <a href="#" className="nav-button">Über  uns</a>
            <a href="#" className="nav-button">Kontakt</a>
          </div>
        </div>
  
        <div className="image-container">
          <img src="/filmbild3.png" alt="Horizontales Bild" className="horizontal-image" />
        </div>
  
        <div className="main-heading">
          Mental Breakdowns Filmblog - Rankings, Analysen und mehr!
        </div>
  
        <div className="klapptext-container">
          <button className="transparent-button" onClick={toggleText}>Über unseren Blog | Kurz und knackig</button>
          <p id="klapptext" className="klapptext">Hier kommt eine kurze Beschreibung über unseren Blog hin.</p>
        </div>
  
        {/* Container für Blogpost-Vorschauen */}
        <div className="blog-preview-container">
          {/* Erste Blogpost-Vorschau */}
          <div className="blog-preview">
            <img src="img/blogpost1.jpg" alt="Blogpost 1" />
            <div className="blog-preview-text">
              <p>Kurzer Text des ersten Blogposts.</p>
              <a href="#" className="read-more-link">Weiterlesen</a>
            </div>
          </div>
  
          {/* Zweite -"- */}
          <div className="blog-preview">
            <img src="img/blogpost2.jpg" alt="Blogpost 2" />
            <div className="blog-preview-text">
              <p>Kurzer Text des zweiten Blogposts.</p>
              <a href="#" className="read-more-link">Weiterlesen</a>
            </div>
          </div>
  
          {/* Dritte -"- */}
          <div className="blog-preview">
            <img src="img/blogpost3.jpg" alt="Blogpost 3" />
            <div className="blog-preview-text">
              <p>Kurzer Text des dritten Blogposts.</p>
              <a href="#" className="read-more-link">Weiterlesen</a>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <div className="footer">
          <a href="#" className="impressum-link">Impressum</a><p>© Mental Breakdown</p>
        </div>
    </div>
    );
  }

export default Home;
