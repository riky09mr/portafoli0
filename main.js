import { createRoot } from 'react-dom/client';
import { createElement, useState } from 'react';
import { Home } from './components/Home.js';
import { About } from './components/About.js';
import { Studens } from './components/studens.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';

function App() {
    const [page, setPage] = useState('home');

    return createElement('div', null, [
        createElement('nav', { key: 'nav' }, [
            createElement('button', { onClick: () => setPage('home'), key: 'home' }, 'Inicio'),
            createElement('button', { onClick: () => setPage('about'), key: 'about' }, 'Sobre mí'),
            createElement('button', { onClick: () => setPage('studens'), key: 'studens' }, 'Estudios'),
            createElement('button', { onClick: () => setPage('projects'), key: 'projects' }, 'Proyectos'),
            createElement('button', { onClick: () => setPage('contact'), key: 'contact' }, 'Contacto')
        ]),
        createElement('main', { key: 'main' }, [
            page === 'home' && createElement(Home, { key: 'home-component' }),
            page === 'about' && createElement(About, { key: 'about-component' }),
            page === 'studens' && createElement(Studens, { key: 'studens-component' }),
            page === 'projects' && createElement(Projects, { key: 'projects-component' }),
            page === 'contact' && createElement(Contact, { key: 'contact-component' })
        ])
    ]);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(createElement(App)); 