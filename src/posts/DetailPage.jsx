import React from 'react';
import {useParams} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../components/css/DetailPage.css'


function Onblur() {
    document.getElementById("Spoiler").className = ' ';
    document.getElementById("SpoilerButton").className = 'hidden'
}


const DetailPage = ({posts}) => {
    let {id} = useParams();
    let post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        return <div>Blogpost nicht gefunden</div>;
    }


    return (
        <div>
            <Header/>


            <div className="blog-image-container">
                <div className="blog-image-container">
                    <img className="blog-main-image" src={post.image[0]} alt="Blogpost Bild"/>
                </div>
            </div>

            <div className="container">
                <h1 className="post-title">{post.title}</h1>
                <div className="post-meta">Datum der Erstellung: {post.date} | Autor: [{post.author}]</div>
                <div className="details">
                    <p><strong>FSK:</strong> {post.fskRating}</p>
                    <p><strong>Erscheinungsdatum:</strong> {post.releaseDate}</p>
                    <p><strong>Genre:</strong> {post.genre}</p>
                    <p><strong>Laufzeit:</strong> {post.laufzeit}</p>
                </div>


                <div className="post-content">
                    <p>{post.excerpt}</p>
                    <div>
                        <img src={post.image2[0]} alt="Bild 1"/>
                        <p className="post-content-img-meta">Datum der
                            Erstellung: {post.image2[1]} | {post.image2[2]}</p>
                    </div>
                    <p>{post.content1}</p>

                    <p>{post.content2}</p>
                    <div>
                        <img src={post.image[0]} alt="Bild 1"/>
                        <p className="post-content-img-meta">Datum der Erstellung: {post.image[1]} | {post.image[2]}</p>
                    </div>
                    <div className="SpoilerContainer">
                        <button id="SpoilerButton" className="button" onClick={Onblur}>Spoiler</button>
                        <p id="Spoiler" className="blurText">{post.content3}</p>
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default DetailPage;

