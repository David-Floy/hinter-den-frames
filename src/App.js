import React from 'react'
import Home from './components/Home'
import ListOfPosts from './components/ListOfPosts';
import DetailPage from "./posts/DetailPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

    const posts = [
        { id: 1, title: 'Big Ass Spider!',
            excerpt: 'Kammerjäger Alex landet mit einem Spinnenbiss im Krankenhaus. Mit dem Direktor des\n' +
                'Hauses geht er einen Deal ein: die Behandlungskosten werden vergessen, wenn Alex die\n' +
                'Leichenhalle auf ein mysteriöses Tier untersucht. Währenddessen spaziert das Militär ein,\n' +
                'um genau dies zu übernehmen. Sie müssen das achtbeinige Getier erledigen, bevor es Los\n' +
                'Angeles zerstört.\n',

            content1: 'Unsere Protagonisten Truppe besteht aus Kammerjäger Alex, Krankenhaus Security Guard\n' +
                'Jose Ramos und Major Braxton Tanner. Sie nehmen die Suche nach der Spinne auf,\n' +
                'nachdem sie aus dem Krankenhaus via Gullideckel flieht. Dabei offenbart Major Tanner den\n' +
                'Ursprung des Monstrums: eine ultimative US-Symbiose aus Alien-DNA und gentechnisch\n' +
                'veränderten Lebensmitteln. Das Resultat ist eine Spinne mit gefährlicher Wachstumsrate,\n' +
                'die nach Zunahme zweibeiniger Snacks exponentiell ansteigt. Doch das beweist sich nur in\n' +
                'Größe, statt Gewicht. Während sich die Spinne in einigen Baumkronen versteckt, knickt kein\n' +
                'einziger Ast unter der Last des PKW-großen Tieres ein. Spätestens im epischen Endkampf\n' +
                'erkennen wir das Phänomen erneut, da bis auf die menschgemachten Militäreingriffe, der\n' +
                'Spinnen-Showdown keine Spuren in der Baustatik-ausgereiften L.A. Skyline hinterlässt.\n',

            image: ['/img/pic1.jpg', '05.03.2024', 'Pixabay'],
            image2: ['/img/pic2.jpg', '05.03.2024', 'Pixabay'],

            content2: "Big Ass Spider! hat nach der Veröffentlichung in 2013 zwei Preise gewonnen. Wofür? „Beste\n" +
                "DVD/Blu-Ray Release“ – was genau das bedeutet, wissen wir auch nicht. Der Film sorgt\n" +
                "jedenfalls fast anderthalb Stunden für Unterhaltung. Das Regie/Drehbuch Duo aus Mike\n" +
                "Mendez und Gregory Gieras haben aus einem simplen Trashfilm Plot einen eigenständigen\n" +
                "Film gezaubert. Das Casting trägt ebenso zum Filmerlebnis bei. Lange sollte nicht gegrübelt\n" +
                "werden, woher man sie kennt. Kammerjäger-Darsteller Greg Grunberg trug für seine Rolle in\n" +
                "Heroes die blaue Uniform des Polizisten Matt Parkman. Die vom Protagonisten\n" +
                "umschmachtete Lt. Karly Brant wird gespielt von Clare Kramer. Sie verantwortete sich in\n" +
                "Buffy als sagenhafte Glory einer Menge Chaos und Verzweiflung. Und dann gibt es da noch\n" +
                "das befehlsmächtige Militär Oberhaupt Major Braxton Tanner. Hinter ihm steckt die\n" +
                "unverkennbare Visage von Ray Wise: Twin Peaks, RoboCop, eben der Mann mit dem\n" +
                "langen IMDB Eintrag.",
        content3: "Insbesondere die Charaktere sind es, die den Film ausmachen. Der mexikanische\n" +
            "Krankenhaus Security Guard Jose Ramos erlebt an der Seite des Kammerjägers seine\n" +
            "eigene Bromance-würdige Heldenreise. Zitternd hält er seine Taschenlampe in der\n" +
            "Leichenhalle des Krankenhauses, doch sein Mut wächst, sodass er zum triumphalen\n" +
            "Konterangriff Alex die nötigen Mittel zuwirft. Auch neben Major Tanner steht ein Mann zur\n" +
            "Seite, den es auf Grund seiner ultimativ stilvollen Präsenz zu erwähnen gilt. Dr. Lucas\n" +
            "kümmerte sich um das „wissenschaftlliche Habitat des Experiments“, weshalb sich das\n" +
            "Unglück auf seinen Tomatengarten verorten lässt. Ziemlich einleuchtend, da er weniger wie\n" +
            "ein durchgeknallter Labor-Doc wirkt und eher scheint, als hätte man ihn bei einer\n" +
            "Weinverkostung im italienischen Ferienhaus aufgegabelt.\n" +
            "Hier handelt es sich um einen guten, wenn nicht verhältnismäßig besser-budgetierten\n" +
            "Trashfilm, der jenen zu empfehlen ist, die zwischendurch was schmunzeln wollen.\n",
            fskRating: "FSK 12",
            releaseDate: "18.10.2013",
            genre: "Sci-Fi, Action, Trashfilm",
            laufzeit: "85 min",
            Rating: "8/10",
            author: "Nina",
            date: "18.03.2022"


        },

        { id: 2, title: 'Titel des Blogposts 2', excerpt: 'Auszug des Blogposts 2', content: 'Inhalt des Blogposts 2', image: '/img/pic2.jpg'},
        { id: 3, title: 'Titel des Blogposts 2', excerpt: 'Auszug des Blogposts 2', content: 'Inhalt des Blogposts 2', image: '/img/pic2.jpg'},
        { id: 4, title: 'Titel des Blogposts 2', excerpt: 'Auszug des Blogposts 2', content: 'Inhalt des Blogposts 2', image: '/img/pic2.jpg'},
        { id: 5, title: 'Titel des Blogposts 2', excerpt: 'Auszug des Blogposts 2', content: 'Inhalt des Blogposts 2', image: '/img/pic2.jpg'},
        // Weitere Blogpost-Daten...
    ];


      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home posts={posts} />}/>
                <Route exact path="/bloglist" element={<ListOfPosts posts={posts} />}/>
                <Route path="/post/:id" element={<DetailPage posts={posts} />} />
            </Routes>

        </Router>

  );



}

export default App;
