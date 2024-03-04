import React from 'react'
import Home from './components/Home'
import DetailPage from "./posts/DetailPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

    const posts = [
        { id: 1, title: 'Titel des Blogposts 1', excerpt: 'Auszug des Blogposts 1', content: 'In einer Welt voller Superheldenfilme ist Marvel Studios seit langem der Maßstab für epische Abenteuer und unvergessliche Charaktere. Ihr neuester Film, [Neuester Marvel-Film], ist keine Ausnahme. Mit einer Kombination aus atemberaubenden visuellen Effekten, einer packenden Handlung und Charakteren, die das Publikum in ihren Bann ziehen, ist dieser Film zweifellos ein weiterer Meilenstein im Marvel Cinematic Universe (MCU).\n' +
                '\n' +
                'Der Film beginnt mit einem Knall und zieht die Zuschauer sofort in seine Welt. Die Eröffnungsszene ist eine spektakuläre Action-Sequenz, die die Bühne für das gesamte Abenteuer setzt. Von Anfang an ist klar, dass dieser Film keine Zeit verschwendet und direkt in die Handlung eintaucht.\n' +
                '\n' +
                'Eine der größten Stärken von [Neuester Marvel-Film] ist sein Ensemble-Cast. Von altbekannten Helden bis hin zu neuen Gesichtern bietet der Film eine vielschichtige und fesselnde Gruppe von Charakteren. Jeder von ihnen hat seine eigenen Motivationen und Ziele, was zu interessanten Konflikten und dynamischen Interaktionen führt. Die Chemie zwischen den Schauspielern ist spürbar und trägt zur immersiven Erfahrung des Films bei.\n' +
                '\n' +
                'Besonders beeindruckend ist die Leistung der Hauptdarsteller. [Name des Hauptdarstellers] überzeugt in seiner Rolle als [Charaktername] mit einer Mischung aus Charisma und Tiefe. Seine Entwicklung im Laufe des Films ist fesselnd und macht ihn zu einem der faszinierendsten Charaktere im MCU. Unterstützt wird er von einer talentierten Besetzung, darunter [Namen weiterer Hauptdarsteller], die alle ihre Momente haben, um zu glänzen.\n' +
                '\n' +
                'Natürlich wäre ein Marvel-Film ohne actiongeladene Sequenzen und beeindruckende visuelle Effekte nicht vollständig. In [Neuester Marvel-Film] werden die Erwartungen in dieser Hinsicht übertroffen. Die Actionszenen sind spektakulär choreografiert und mit beeindruckenden Effekten versehen. Ob es sich um epische Schlachten oder atemberaubende Verfolgungsjagden handelt, der Film bietet eine Fülle von visuellem Spektakel, das das Publikum in seinen Bann zieht.\n' +
                '\n' +
                'Darüber hinaus beeindruckt [Neuester Marvel-Film] mit einer tiefgreifenden und ansprechenden Handlung. Während der Film die typischen Elemente eines Superheldenfilms enthält - einschließlich heroischer Taten und epischer Schlachten -, geht er auch über sie hinaus und erkundet Themen wie Freundschaft, Opferbereitschaft und die Suche nach Identität. Dadurch fühlt sich der Film nicht nur wie ein weiteres Superheldenabenteuer an, sondern auch wie eine bedeutungsvolle Erzählung, die zum Nachdenken anregt.\n' +
                '\n' +
                'Ein weiterer Höhepunkt von [Neuester Marvel-Film] ist seine beeindruckende visuelle Gestaltung. Die Welt, die die Filmemacher geschaffen haben, ist reichhaltig und detailreich, und jede Einstellung ist ein visuelles Fest für die Augen. Von den glänzenden Wolkenkratzern der Stadt bis hin zu den weitläufigen Landschaften der entlegensten Ecken des Universums ist jeder Schauplatz sorgfältig gestaltet und trägt zur Immersion des Publikums bei.\n' +
                '\n' +
                'Neben seiner visuellen Pracht überzeugt der Film auch mit einem mitreißenden Soundtrack, der die emotionalen Momente verstärkt und die Actionsequenzen auf ein neues Level hebt. Die Musik ist perfekt auf die Stimmung des Films abgestimmt und trägt dazu bei, die Atmosphäre zu verstärken und die Zuschauer noch tiefer in das Geschehen einzubeziehen.\n' +
                '\n' +
                'Insgesamt ist [Neuester Marvel-Film] ein Triumph für das MCU und ein weiterer Beweis für die Fähigkeit von Marvel Studios, fesselnde Geschichten zu erzählen und unvergessliche Charaktere zu schaffen. Mit seiner packenden Handlung, beeindruckenden visuellen Effekten und einem Ensemble-Cast, das auf ganzer Linie überzeugt, ist dieser Film ein Muss für Fans von Superheldenfilmen und ein Erlebnis, das noch lange nach dem Abspann in Erinnerung bleibt. Marvel hat sich erneut selbst übertroffen und bewiesen, dass sie die Könige des Superheldenkinos sind.', image: '/img/pic1.jpg' },
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
                <Route path="/post/:id" element={<DetailPage posts={posts} />} />
            </Routes>

        </Router>

  );



}

export default App;
