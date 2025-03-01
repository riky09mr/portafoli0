import React, { useEffect, useState } from 'react';

export const Home = ({ setPage }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [typedText, setTypedText] = useState('');
    const fullText = 'Creando soluciones digitales innovadoras y experiencias web únicas';
    
    // Verificar si setPage es una función
    const handleNavigation = (page) => {
        if (typeof setPage === 'function') {
            setPage(page);
        } else {
            console.error('setPage no es una función o no está definida correctamente');
            // Alternativa de navegación usando window.location
            window.location.hash = `#${page}`;
        }
    };
    
    useEffect(() => {
        // Animación de entrada
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);
        
        // Efecto de typing
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setTypedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);
        
        return () => {
            clearTimeout(timer);
            clearInterval(typingInterval);
        };
    }, []);
    
    return (
        <div className={`home-container ${isVisible ? 'visible' : ''}`}>
            {/* Hero Section con diseño mejorado */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-greeting">¡Hola! Soy</div>
                    <h1 className="hero-name">Rivaldo <span className="accent-text">Zárate</span></h1>
                    <h2 className="hero-title">Desarrollador & UX/UI Designer</h2>
                    <p className="hero-description">
                        {typedText}<span className="typing-cursor">|</span>
                    </p>
                    <div className="hero-cta">           
                        {/*
                        <button 
                            className="primary-button"
                            onClick={() => handleNavigation('projects')}
                        >
                            Ver Proyectos
                            <i className="fas fa-arrow-right"></i>
                        </button>
                        <button 
                            className="secondary-button"
                            onClick={() => handleNavigation('contact')}
                        >
                            Contactar
                            <i className="fas fa-envelope"></i>
                        </button>
                        */}
                    </div>
                    <div className="social-links">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-container">
                        <img 
                            src="/WhatsApp Image 2025-03-01 at 13.01.56.jpeg" 
                            alt="Rivaldo Zárate" 
                            className="profile-img"
                        />
                        <div className="image-decoration"></div>
                    </div>
                </div>
            </section>

            {/* About Section con diseño mejorado */}
            <section className="about-preview">
                <div className="section-header">
                    <h3 className="section-title">
                        <span className="accent-text">Sobre</span> Mí
                    </h3>
                    <div className="title-underline"></div>
                </div>
                
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-greeting">
                            ¡Hola! <span className="wave-emoji">👋</span>
                        </p>
                        <p className="about-paragraph">
                            Soy <span className="highlight">Rivaldo Zárate</span>, un desarrollador con experiencia en soluciones tecnológicas y diseño.
                        </p>
                        <p className="about-paragraph">
                            Mi trayectoria incluye el desarrollo de sistemas y aplicaciones utilizando tecnologías como 
                            <span className="tech-highlight">JavaScript</span>, 
                            <span className="tech-highlight">PHP</span>, 
                            <span className="tech-highlight">Laravel</span> y bases de datos como 
                            <span className="tech-highlight">MySQL</span> y 
                            <span className="tech-highlight">PostgreSQL</span>. 
                            Además, he trabajado en entornos colaborativos gestionando proyectos con herramientas como 
                            <span className="tech-highlight">Git</span> y 
                            <span className="tech-highlight">Jira</span>.
                        </p>
                        <p className="about-paragraph">
                            A lo largo de mi carrera, descubrí mi interés por el diseño de experiencia de usuario (UX) e interfaces 
                            de usuario (UI). He desarrollado habilidades en herramientas como 
                            <span className="tech-highlight">Figma</span> y 
                            <span className="tech-highlight">Adobe XD</span>, 
                            lo que me permite aportar soluciones visuales y funcionales que conecten con las necesidades del usuario.
                        </p>
                        {/* Comentamos el botón que usa setPage */}
                        {/*
                        <button 
                            className="read-more-button"
                            onClick={() => handleNavigation('about')}
                        >
                            Leer más sobre mí
                            <i className="fas fa-chevron-right"></i>
                        </button>
                        */}
                    </div>
                    <div className="about-decoration">
                        <div className="decoration-element"></div>
                    </div>
                </div>
            </section>

            {/* Skills Section con diseño mejorado */}
            <section className="skills-section">
                <div className="section-header">
                    <h3 className="section-title">
                        <span className="accent-text">Tecnologías</span> y Herramientas
                    </h3>
                    <div className="title-underline"></div>
                </div>
                
                <div className="skills-grid">
                    <div className="skill-card">
                        <div className="skill-icon-container">
                            <i className="fab fa-react"></i>
                        </div>
                        <h4 className="skill-title">Frontend</h4>
                        <p className="skill-description">JavaScript, HTML5, CSS3, React</p>
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{width: '90%'}}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon-container">
                            <i className="fab fa-php"></i>
                        </div>
                        <h4 className="skill-title">Backend</h4>
                        <p className="skill-description">PHP, Laravel, MySQL, PostgreSQL</p>
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{width: '85%'}}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon-container">
                            <i className="fas fa-pencil-ruler"></i>
                        </div>
                        <h4 className="skill-title">Diseño UX/UI</h4>
                        <p className="skill-description">Figma, Adobe XD, Diseño Responsivo</p>
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{width: '80%'}}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon-container">
                            <i className="fas fa-tools"></i>
                        </div>
                        <h4 className="skill-title">Herramientas</h4> 
                        <p className="skill-description">     Git,  Jira,  Metodologías Ágiles para los proyectos</p>
                        <div className="skill-progress-container">
                            <div className="skill-progress" style={{width: '88%'}}></div>
                        </div>
                    </div>
                </div>
                
                <div className="cta-container">
                    {/*
                    <button 
                        className="primary-button"
                        onClick={() => handleNavigation('projects')}
                    >
                        Ver mis proyectos
                        <i className="fas fa-laptop-code"></i>
                    </button>
                    */}
                </div>
            </section>
        </div>
    );
}; 