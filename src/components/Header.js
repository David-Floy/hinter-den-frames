import React, {Component} from 'react'

class Header extends Component {
state ={}

    render() {
    return(
        <div className="header">
            <a href="../" className="blog-title">Hinter den Frames &copy;</a>
            <div>
                <a href="#" className="nav-button">Alle Blogposts</a>
                <a href="#" className="nav-button">Über uns</a>
                <a href="#" className="nav-button">Kontakt</a>
            </div>
        </div>
    );
    }

}

export default Header;