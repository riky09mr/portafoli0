const Home = ({ setPage }) => {
    return (
        <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
            <div className="hero-content">
                <h1>Rivaldo Zárate</h1>
                <h2>Desarrollador Full Stack & UX/UI Designer</h2>
                <p className="hero-description">
                    Creando soluciones digitales innovadoras y experiencias web únicas
                </p>
                <div className="cta-buttons">
                    <button 
                        onClick={() => setPage('projects')}
                        className="cta-primary"
                    >
                        Ver Proyectos
                    </button>
                    <button 
                        onClick={() => setPage('contact')}
                        className="cta-secondary"
                    >
                        Contactar
                    </button>
                </div>
            </div>
            <div className="hero-image">
                <img 
                    src="/imagenes/alquiler/naruto-baryon.jpg" 
                    alt="Rivaldo Zárate" 
                    className="profile-img"
                />
            </div>
        </section>

        {/* About Section */}
        <section className="about-preview">
            <div className="about-text">
                <h3>¡Hola! 👋</h3>
                <p>
                    Soy Rivaldo Zárate, un desarrollador con experiencia en soluciones tecnológicas y diseño.
                </p>
                <p>
                    Mi trayectoria incluye el desarrollo de sistemas y aplicaciones utilizando tecnologías como JavaScript, 
                    PHP, Laravel y bases de datos como MySQL y PostgreSQL. Además, he trabajado en entornos colaborativos 
                    gestionando proyectos con herramientas como Git y Jira.
                </p>
                <p>
                    A lo largo de mi carrera, descubrí mi interés por el diseño de experiencia de usuario (UX) e interfaces 
                    de usuario (UI). He desarrollado habilidades en herramientas como Figma y Adobe XD, lo que me permite 
                    aportar soluciones visuales y funcionales que conecten con las necesidades del usuario.
                </p>
            </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
            <h3>Tecnologías y Herramientas</h3>
            <div className="skills-grid">
                <div className="skill-card">
                    <i className="fab fa-react"></i>
                    <h4>Frontend</h4>
                    <p>JavaScript, HTML5, CSS3, React</p>
                </div>
                <div className="skill-card">
                    <i className="fab fa-php"></i>
                    <h4>Backend</h4>
                    <p>PHP, Laravel, MySQL, PostgreSQL</p>
                </div>
                <div className="skill-card">
                    <i className="fas fa-pencil-ruler"></i>
                    <h4>Diseño UX/UI</h4>
                    <p>Figma, Adobe XD, Diseño Responsivo</p>
                </div>
                <div className="skill-card">
                    <i className="fas fa-tools"></i>
                    <h4>Herramientas</h4>
                    <p>Git, Jira, Metodologías Ágiles</p>
                </div>
            </div>
        </section>
    </div>
);
}; 