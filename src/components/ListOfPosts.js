import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Blogpost from "./Blogpost";
import "./css/ListOfPosts.css";
import "../posts/DetailPage";

const ListOfPosts = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="filter">
        <div>
        <a href="/all" className="filter-button">
          Alle
        </a>
        <a href="/movies" className="filter-button">
          Filme
        </a>
        <a href="/shows" className="filter-button">
          Serien
        </a>
        </div>
        <div>
      <input className="search-bar" type="text" placeholder="Suche..." />
      <span className="search-icon">&#x1F50D;&#xFE0E;</span>
      </div>
      </div>
      <div className="blogpost-container">
        {posts.map((post) => (
          <Blogpost
            id={post.id}
            image={post.image[0]}
            alt={post.title}
            title={post.title}
            excerpt={post.excerpt}
            linkedPost={`/post/${post.id}`}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default ListOfPosts;
