import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Blogpost from "./Blogpost";
import "./css/ListOfPosts.css";
import "../posts/DetailPage";

const impressum = ({posts}) => {
    return(
        <div>
            <Header />
            <div>
            <h1>Impressum</h1>

            <p>David Tischer<br />
                Kastanienweg, 53<br />
                53177 Bonn</p>

            <h2>Kontakt</h2>
            <p>Telefon: 015779223647<br />
                Telefax: +49 (0) 123 44 55 99<br />
                E-Mail: pc.tischer@gmail.com</p>

            <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
            </div>
            </div>
            );
            };

            export default impressum;