
const Projects = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [currentProject, setCurrentProject] = React.useState(null);

    const projects = [
        {
            id: 1,
            title: "Sistema de Alquiler",
            description: "Aplicación web para gestión de alquileres",
            images: [
                "imagenes/alquiler/naruto-baryon.jpg",
                "imagenes/alquiler/naruto-uzumaki-baryon.jpg",
                "imagenes/alquiler/itachi-uchiha-sharingan-naruto-anime-4k-uhdpaper.com-14.jpg",
                "imagenes/alquiler/naruto-uzumaki-baryon.jpg",
            ],
            link: "https://tuproyecto1.com",
            technologies: ["Laravel", "PostgreSQL", "Docker"]
        },
        {
            id: 2,
            title: "Diseño UX/UI eCommerce",
            description: "Rediseño de plataforma de comercio electrónico",
            images: [
                "https://via.placeholder.com/400x300?text=Proyecto+2+Imagen+1",
                "https://via.placeholder.com/400x300?text=Proyecto+2+Imagen+2",
                "https://via.placeholder.com/400x300?text=Proyecto+2+Imagen+3"
            ],
            link: "https://tuproyecto2.com",
            technologies: ["Figma", "Adobe XD"]
        }
    ];

    const openGallery = (project, index) => {
        setCurrentProject(project);
        setCurrentImageIndex(index);
        setSelectedImage(project.images[index]);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (currentProject) {
            const newIndex = (currentImageIndex + 1) % currentProject.images.length;
            setCurrentImageIndex(newIndex);
            setSelectedImage(currentProject.images[newIndex]);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (currentProject) {
            const newIndex = currentImageIndex === 0 
                ? currentProject.images.length - 1 
                : currentImageIndex - 1;
            setCurrentImageIndex(newIndex);
            setSelectedImage(currentProject.images[newIndex]);
        }
    };

    const closeGallery = () => {
        setSelectedImage(null);
        setCurrentProject(null);
        setCurrentImageIndex(0);
    };

    return (
        <div className="projects-container">
            <div className="hero-content">
                <h2>Mis Proyectos</h2>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-images-grid">
                            {project.images.slice(0, 4).map((image, index) => (
                                <div 
                                    key={index}
                                    className="project-image-thumbnail"
                                    onClick={() => openGallery(project, index)}
                                >
                                    <img src={image} alt={`${project.title} ${index + 1}`} />
                                    <div className="image-overlay">
                                        <span>Ver galería</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            
                            <div className="technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Ver Proyecto
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup Gallery */}
            {selectedImage && currentProject && (
                <div className="popup-overlay" onClick={closeGallery}>
                    <div className="popup-content">
                        <img src={selectedImage} alt="Proyecto ampliado" />
                        <button 
                            className="close-popup"
                            onClick={closeGallery}
                        >
                            ×
                        </button>
                        <button 
                            className="nav-button prev"
                            onClick={prevImage}
                        >
                            ‹
                        </button>
                        <button 
                            className="nav-button next"
                            onClick={nextImage}
                        >
                            ›
                        </button>
                        <div className="image-counter">
                            {currentImageIndex + 1} / {currentProject.images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}; 