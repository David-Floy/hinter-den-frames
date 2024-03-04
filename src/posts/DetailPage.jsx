

import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../components/css/DetailPage.css'

const DetailPage = ({ posts }) => {
    let { id } = useParams();
    let post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        return <div>Blogpost nicht gefunden</div>;
    }

    return (
        <div>
            <Header/>


            <div className="container">
                <div className="blog-image-container">
                    <img className="blog-main-image" src={post.image} alt="Blogpost Bild"/>
                </div>
            </div>
            <div className={'blog'}>


                <h1 className={'main-heading'}>{post.title}</h1>
                <p>{post.content}</p>
            </div>
            <Footer/>
        </div>
    );
};

export default DetailPage;

