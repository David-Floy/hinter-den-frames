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

        { id: 2, title: 'Kurzkritik: Wild Tales',
            excerpt: '„Gerne würde ich denen mal zeigen, wo der Haken hängt“, „Dem würde ich am liebsten eine\n' +
                'verpassen!“ oder Ähnliches sind doch alles Gedankenspiele, die viele von uns irgendwann in\n' +
                'bestimmten Lebenssituationen einmal hatten. Sei es beispielsweise im überbürokratisierten\n' +
                'Amtswesen oder bei einer Begegnung mit einer höchst unangenehmen Privatperson.\n',
         
            content1: 'Natürlich verbleiben diese Gedanken im Regelfall (und das ist gut so) dort, wo sie hingehören.\n' +
                'Man bleibt in solchen Situationen respektvoll, vernünftig und so höflich wie möglich. So, wie es\n' +
                'in einer zivilisierten Gesellschaft sein sollte – oder? Gäbe es nicht immer diese Ausnahmen…\n' +
                'Und über genau solche Ausnahmen erzählt Wild Tales – Jeder dreht mal durch (2014). \n' +
                'Diese rabenschwarze Komödie/Satire aus Argentinien konterkariert die gesellschaftliche Konvention\n' +
                'der Vernunft und Zurückhaltung und zeigt in herrlich komischen und gewaltvollen Extremfällen\n' +
                'auf, wie die höchste Ebene aller Eskalationsstufen aussehen kann, wenn Personen das innere\n' +
                'Tier aus sich herauslassen.\n' +
                'Der Episodenfilm besteht aus sechs unabhängig voneinander erzählten Teilen und handelt von\n' +
                'Alltagsszenarien an Schauplätzen wie beispielsweise einer Hochzeit, einem Linienflug\n' +
                'oder einem verregnetem Abend in einem Diner. Der Plot ist jedes Mal ein anderer,\n' +
                'mit der einzigen Gemeinsamkeit, sich langsam von einer eher unbedenklichen zu einer\n' +
                'absolut eskalierten Situation zu entwickeln.\n' +
                'Mit seinen überspitzten Szenarien versucht der Film aufzuzeigen, wie suboptimale Lösungen\n' +
                'von solchen Situationen aussehen könnten, um schließlich am Ende doch wieder auf eine deeskalierende\n' +
                'Ebene zurückzukehren, um uns mitzuteilen, dass diese Art von Lösungen keine sind.\n' +
                'Letztendlich sollten wir doch versuchen, stets besonnen zu agieren.\n',

            image: ['/img/Filmklappe1.jpg', '07.03.2024', 'Pixabay'],
            image2: ['/img/Braunbaer1.jpg', '07.03.2024', 'Pixabay'],
         
            content2: 'Wild Tales hält sich nicht zurück mit überzogener Gewalt, schafft es aber,\n' +
                'diese mit wunderbar komischen Timings zu verbinden und somit eine großartige Synergie\n' +
                'zu schaffen. Und eigentlich kann Wild Tales noch viel mehr, als „nur“ eine schwarze Komödie zu\n' +
                'sein: Durch seine Gewalt/Humor-Synergie schafft es der Film sehr gut, von seiner eigentlich\n' +
                'ernsthaften Thematik abzulenken. Hier wird nämlich nebenbei einschlägige Gesellschaftskritik\n' +
                'ausgeübt. Themen der Kapitalismuskritik wie Korruption, Ungerechtigkeit, Zwei-Klassen-Gesellschaft,\n' +
                'als auch Themen wie Illoyalität oder Empathielosigkeit finden in dem Film Bedeutung. \n' +
                'Wild Tales hat Spaß gemacht. Ich kann mir jedoch gut vorstellen, dass diese Arten der Inszenierung und\n' +
                'des Humors nicht für jede Person gemacht sind. Für mich hat der Film letztlich sehr gut funktioniert!\n',

            fskRating: "FSK 12",
            releaseDate: "2014, Argentinien",
            genre: "Drama, Komödie, Satire",
            laufzeit: "122 min",
            Rating: "8,5/10",
            author: "Marvin",
            date: "06.03.2024" 
        },
        
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
