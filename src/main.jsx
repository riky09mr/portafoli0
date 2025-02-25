import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components/Home.jsx';
import { About } from './components/About.jsx';
import { Studens } from './components/Studens.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import './index.css';

function App() {
    const [page, setPage] = useState('home');

    return React.createElement('div', { className: 'page-container' }, [
        React.createElement('nav', { key: 'nav' }, [
            React.createElement('button', { 
                onClick: () => setPage('home'), 
                key: 'home',
                className: page === 'home' ? 'active' : '' 
            }, 'Inicio'),
            React.createElement('button', { 
                onClick: () => setPage('about'), 
                key: 'about',
                className: page === 'about' ? 'active' : '' 
            }, 'Sobre mí'),
            React.createElement('button', { 
                onClick: () => setPage('studens'), 
                key: 'studens',
                className: page === 'studens' ? 'active' : '' 
            }, 'Estudios'),
            React.createElement('button', { 
                onClick: () => setPage('projects'), 
                key: 'projects',
                className: page === 'projects' ? 'active' : '' 
            }, 'Proyectos'),
            React.createElement('button', { 
                onClick: () => setPage('contact'), 
                key: 'contact',
                className: page === 'contact' ? 'active' : '' 
            }, 'Contacto')
        ]),
        React.createElement('main', { key: 'main' }, [
            page === 'home' && React.createElement(Home, { key: 'home-component' }),
            page === 'about' && React.createElement(About, { key: 'about-component' }),
            page === 'studens' && React.createElement(Studens, { key: 'studens-component' }),
            page === 'projects' && React.createElement(Projects, { key: 'projects-component' }),
            page === 'contact' && React.createElement(Contact, { key: 'contact-component' })
        ]),
        React.createElement('div', { className: 'floating-social', key: 'social-links' }, [
            React.createElement('a', { 
                href: 'https://www.linkedin.com/in/rivaldo-zarate-49638a1a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', 
                target: '_blank', 
                rel: 'noopener noreferrer',
                className: 'linkedin',
                key: 'linkedin'
            }, [
                React.createElement('i', { className: 'fab fa-linkedin', key: 'linkedin-icon' })
            ]),
            React.createElement('a', { 
                href: 'https://github.com/riky09mr', 
                target: '_blank', 
                rel: 'noopener noreferrer',
                className: 'github',
                key: 'github'
            }, [
                React.createElement('i', { className: 'fab fa-github', key: 'github-icon' })
            ]),
            React.createElement('a', { 
                href: 'https://twitter.com/tu-usuario', 
                target: '_blank', 
                rel: 'noopener noreferrer',
                className: 'twitter',
                key: 'twitter'
            }, [
                React.createElement('i', { className: 'fab fa-twitter', key: 'twitter-icon' })
            ]),
            React.createElement('a', { 
                href: 'https://www.instagram.com/rivanza09?igsh=MXBnOGltODVsZXBvNw%3D%3D&utm_source=qr', 
                target: '_blank', 
                rel: 'noopener noreferrer',
                className: 'instagram',
                key: 'instagram'
            }, [
                React.createElement('i', { className: 'fab fa-instagram', key: 'instagram-icon' })
            ]),
            React.createElement('a', { 
                href: 'https://wa.me/595991630725', 
                target: '_blank', 
                rel: 'noopener noreferrer',
                className: 'whatsapp',
                key: 'whatsapp'
            }, [
                React.createElement('i', { className: 'fab fa-whatsapp', key: 'whatsapp-icon' })
            ])
        ])
    ]);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
); 