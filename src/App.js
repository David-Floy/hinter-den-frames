import React from 'react'
import Home from './components/Home'
import ListOfPosts from './components/ListOfPosts';
import DetailPage from "./posts/DetailPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Impressum from "./components/Impressum";

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
                'Und über genau solche Ausnahmen erzählt <em>Wild Tales – Jeder dreht mal durch</em> (2014). \n' +
                'Diese rabenschwarze Komödie/Satire aus Argentinien konterkariert die gesellschaftliche Konvention\n' +
                'der Vernunft und Zurückhaltung und zeigt in herrlich komischen und gewaltvollen Extremfällen\n' +
                'auf, wie die höchste Ebene aller Eskalationsstufen aussehen kann, wenn Personen das innere\n' +
                'Tier aus sich herauslassen.\n' +
                '<br>Der Episodenfilm besteht aus sechs unabhängig voneinander erzählten Teilen und handelt von\n' +
                'Alltagsszenarien an Schauplätzen wie beispielsweise einer Hochzeit, einem Linienflug\n' +
                'oder einem verregnetem Abend in einem Diner. Der Plot ist jedes Mal ein anderer,\n' +
                'mit der einzigen Gemeinsamkeit, sich langsam von einer eher unbedenklichen zu einer\n' +
                'absolut eskalierten Situation zu entwickeln.\n' +
                '<br>Mit seinen überspitzten Szenarien versucht der Film aufzuzeigen, wie suboptimale Lösungen\n' +
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
                '<br>Wild Tales hat Spaß gemacht. Ich kann mir jedoch gut vorstellen, dass diese Arten der Inszenierung und\n' +
                'des Humors nicht für jede Person gemacht sind. Für mich hat der Film letztlich sehr gut funktioniert!\n',

            fskRating: "FSK 12",
            releaseDate: "2014, Argentinien",
            genre: "Drama, Komödie, Satire",
            laufzeit: "122 min",
            Rating: "8,5/10",
            author: "Marvin",
            date: "06.03.2024" 
        },
        
        { id: 3, title: 'Unterm Radar?', 
             excerpt: 'Heute nehme ich mir die Zeit für ein kleines, nicht-chronologisches Ranking mit Tipps zu \n' +
                'Bewegtbildproduktionen, die in den jüngeren Filmjahrzehnten meiner Meinung nach \n' +
                'unverdienterweise zu kurz gekommen oder unbekannter, sprich unterm Radar geblieben sind. Zum Teil \n' +
                'basiert diese Schlussfolgerung auf meiner subjektiven Sichtweise, sowie dem Erfolg im Kino \n' +
                'anhand der Besucherzahlen als auch dem offiziellen Box Office. \n' , 
         
            content1: 'Ich bin also mehr oder weniger nach Belieben vorgegangen, ohne irgendeinem bestimmten Schema F zu folgen. \n' +
                'Filme, die allerdings noch im Nachhinein zu Kulttiteln geworden sind, habe ich logischerweise \n' +
                'nicht berücksichtigt, sonst wäre es wohl zu einfach gewesen und ihr würdet jeden Titel bereits \n' +
                'kennen. Schließlich kennt jeder Filmklassiker wie The Big Lebowski, Fight Club oder Die \n' +
                'Verurteilten, deren Einspielergebnisse/Zahlen zwar miserabel waren, doch durch das Heimprogramm Kultstatus  \n' +
                'erfahren haben. \n' +
                '<br><strong>The Ballad of Buster Scruggs (2018):</strong> \n' +
                '<br>Erfolgreich geworden durch Filme wie True Grit, The Big Lebowski oder No Country for Old Men \n' +
                'dürften für viele Filmliebhaber die Coen-Brüder ein Begriff sein. \n' +
                'Für The Ballad of Buster Scruggs jedoch nicht unbedingt. Möglicherweise, weil er etwas \n' +
                'unscheinbar von Netflix produziert und veröffentlicht worden ist und allein deswegen eine \n' +
                'gewisse Zugriffsbeschränkung besteht. \n' +
                '<br>Der Anthologiefilm vermittelt in 6 unabhängigen Geschichten über den rauen und rohen \n' +
                '„Do-or-Die“ Wilden Westen. Jede Geschichte fasst einzelne Aspekte dieser Zeit auf. Und dies geschieht \n' +
                'zu meinem Gefallen auf eine in weiten Teilen entromantisierte Weise. \n' +
                '<br>The Ballad of Buster Scruggs besticht durch tolle Dialoge und Bilder. Und jede Geschichte bringt eine \n' + 
                'eigene Moral mit sich. Ich empfehle ihn gerne. \n'+

                '<br><strong>No Way Out / Only the Brave (2017):</strong> \n' +
                '<br>Ein Kinoflop mit 38 Mio. Dollar Produktionsbudget und \n' +
                'weltweiten Einspielergebnissen von nur 24,5 Mio. Dollar. An mir ist der Film leider zuerst \n' +
                'auch vorbeigegangen. Als ich ihn im Heimprogamm schaute, fragte ich mich, wieso der Film \n' +
                'nicht erfolgreich war.  \n' +
                '<br>Der Cast, die Bilder, Spiel und Story waren sehr stimmig. Vielleicht, \n' +
                'weil das Thema um Feuerwehrmänner im Kampf gegen die Flammen zu altbacken oder unoriginell \n' +
                'erscheint? Ich weiß es nicht. \n' +
                '<br>Die Filmbiografie handelt von einer Truppe Feuerwehrmänner, \n' +
                'die sich zu sogenannten „Hotshots“, einer Elite-Einheit zur Waldbrandbekämpfung in den USA, \n' +
                'hocharbeiten und letztendlich zum Einsatz kommen. Angeführt wird die Truppe von der \n' +
                'hochcharismatischen Figur Eric Marsh (Josh Brolin).  \n' +
                '<br>Hier entstehen auch außerhalb des Kampfes \n' +
                'gegen die Flammen wahrhaftige Gefühle von familiärem Zusammenhalt und Courage. Ich konnte \n' +
                'mich immer mehr mit der sehr eigenwilligen, aber sympathischen Truppe identifizieren und \n' +
                'wurde vor allem zum Ende hin emotional mitgerissen. Toller Film. \n',
                    
            image: ['/img/HollywoodPic1.jpg', '07.03.2024', 'Pixabay'],
            image2: ['/img/WesternPic1.jpg', '07.03.2024', 'Pixabay'],

            content2: '<strong>The Nice Guys (2016):</strong> \n' + 
                '<br>Ein meiner Meinung nach sehr unterhaltsamer Film, der die ikonische Buddy-/Actionkomödie \n' +
                'im Stile des Neo-Noire wieder aufleben hat lassen. Zumindest inhaltlich, den \n' +
                'Besucherzahlen nach nämlich nicht. Die meisten dürften The Nice Guys aufgrund des \n' +
                'Marketings kennen. Er dürfte nicht so oft geschaut worden sein. Er war ein Kassenflop. \n' +
                '<br>The Nice Guys wirft uns zurück in die 70er Jahre und liefert uns eine großartige Story, einen \n' +
                'fantastischen Cast und eine insgesamt abwechslungsreiche Mischung aus Spaß und Spannung. \n' +
                '<br>Natürlich erfindet The Nice Guys, auch aufgrund des Genres, das Rad nicht neu, hat aber durchaus \n' +
                'seinen eigenen Touch und brachte mir Frische in den Kinoalltag. Vielleicht auch, weil die \n' +
                'letzten gut funktionierenden Buddyfilme mehr als ein Jahrzehnt zurückliegen und Ryan Gosling, \n' +
                'Russel Crowe und Angourie Rice durch ihre wunderbare Synergie bestechen. Ich für meinen Teil \n' +
                'mag den Film sehr! \n' +

                '<br><strong>Hugo Cabret (2011):</strong> \n' +
                '<br>Auch Martin Scorsese kann Flops. Auch wenn 180 Mio. Dollar nicht gering klingen \n' +
                'klingen mögen. Vermutlich lag es hier an der 3D-Technologie, mit welcher der Film produziert \n' +
                'wurde, die viele Kinogänger abschreckte.  \n' +
                '<br>Ich denke ganz unbekannt dürfte der Film nicht sein, \n' +
                'da er aber als Flop gehandelt wird, wollte ich ihn trotzdem erwähnen. \n'+
                '<br>Hugo Cabret ist eine Hommage auf das Kino an sich und auf einen der Pioniere der Filmgeschichte. \n' +
                'Verpackt ist diese Hommage mit der Geschichte der Figur Hugo Cabrets, einem Waisenjungen, der sich mit \n' +
                'komplizierten Uhrwerken und einem nicht ganz so unwichtigen, mechanischen Mini-Mensch \n' +
                'auseinandersetzt. Ein Erbe seines geliebten Vaters. \n' +
                'Der Film erschafft eine Stimmung voll Melancholie und Magie und blüht im Verlauf richtig auf. \n' +

                '<br><strong>Die Ermordung des Jesse James durch den Feigling Robert Ford (2007):</strong> \n' +
                '<br>Ein wahrlich abschreckender Titel. \n' +
                'So abschreckend, dass der Film niemand in die Kinosäle locken konnte. \n' +
                '<br>Dabei ist „DEDJJDDFRF“ (klingt selbst abgekürzt grauenvoll) eines der am meisten abgerundeten Dramen, \n' +
                'die ich gesehen habe. Sowohl Casey Affleck als auch Brad Pitt spielen klasse, Roger Deakins \n' +
                'fährt mit einer herausragenden Bildgewalt auf und Sound und Musik von Nick Cave erweisen sich \n' +
                'als sehr stimmungsvoll. \n' +
                '<br>Nebenbei betreibt der Western eine stringente Auseinandersetzung von \n' +
                'parasozialer Beziehung, Romantisierung und der bitteren Realität. Wie der Film ausgeht, wissen \n' +
                'wir ja bereits durch den Titel - oder?" \n',

            fskRating: "FSK 12-16",
            releaseDate: "2007, 2011, 2017, 2017, 2018",
            genre: "Drama, Western, Komödie, Abenteuer",
            laufzeit: "/",
            Rating: "Alle im 8/10er Bereich",
            author: "Marvin",
            date: "08.03.2024"                    
       
        },

        
        { id: 4, title: 'Titel des Blogposts 2', excerpt: 'Auszug des Blogposts 2', content: 'Inhalt des Blogposts 2', image: '/img/pic2.jpg'},
        // Weitere Blogpost-Daten...
    ];


      return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home posts={posts} />}/>
                <Route exact path="/bloglist" element={<ListOfPosts posts={posts} />}/>
                <Route exact path="/Impressum" element={<Impressum posts={posts} />}/>
                <Route path="/post/:id" element={<DetailPage posts={posts} />} />
            </Routes>

        </Router>

  );



}

export default App;
