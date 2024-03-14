import React from 'react';
import './css/Home.css';
import '../posts/DetailPage'
import Header from "./Header";
import Blogpost from './Blogpost';
import { Link } from 'react-router-dom';

import Footer from "./Footer";

const Home = ({posts}) => {
    
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
        <Header/>
        {/*<div className="header">
          <a href="https://www.google.de/" className="blog-title">Hinter den Frames &copy;</a>
          <div>
            <a href="#" className="nav-button">Alle  Blogposts</a>
            <a href="#" className="nav-button">Über  uns</a>
            <a href="#" className="nav-button">Kontakt</a>
          </div>
        </div>*/}
  
        <div className="image-container">
          <img src="/img/filmbild3.png" alt="Horizontales Bild" className="horizontal-image" />
        </div>
  
        <div className="main-heading">
          Mental Breakdowns Film- und Serienblog - Rankings, Analysen und mehr!
        </div>
  
        <div className="klapptext-container">
          <button className="transparent-button" onClick={toggleText}>Über unseren Blog | Kurz und knackig</button>
          <p id="klapptext" className="klapptext">Wir sind Rahel, David und Marvin und haben uns für ein Uni-Projekt dazu entschieden einen Film- und Serienblog zu erstellen, weil wir Bewegtbildproduktionen lieben! 
            <br>Wir wünschen euch viel Spaß beim stöbern </p>
        </div>
  
        {/* Container für Blogpost-Vorschauen */}
        <div className="blog-preview-container">
          {/* Erste Blogpost-Vorschau */}
            {posts.map(post =>(
          <div key={post.id} className="blog-preview">
            <img src={post.image[0]} alt={post.title} />
            <div className="blog-preview-text">
                <h2>{post.title}</h2>
                <p> {post.excerpt}</p>
                <Link className="read-more-link" to={`/post/${post.id}`}>Weiterlesen</Link>
            </div>

          </div>
            ))}

        </div>
  
        {/* Footer */}
        <Footer/>
    </div>
    );
  }

export default Home;


