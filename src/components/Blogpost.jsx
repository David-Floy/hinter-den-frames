import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Blogpost extends Component {
  state = {};
  render() {
    return (
      <div className="blogpost-container">
        <div key={this.props.id} className="blogpost-preview">
          <img
            src={this.props.image}
            className="blogpost-image"
            alt={"..."}
          />
          <div className="blogpost-preview-text">
            <h2 className="blogpost-title">{this.props.title}</h2>
            <p className="blogpost-text"> {this.props.excerpt}</p>
            <Link className="read-more-link" to={this.props.linkedPost}>
              Weiterlesen
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogpost;
