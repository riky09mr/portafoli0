import React, { useState, useEffect, useCallback } from 'react';

export const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentProject, setCurrentProject] = useState(null);
    const [animatedProjects, setAnimatedProjects] = useState([]);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const projects = [
        {
            id: 1,
            title: "Inmobiliaria InmoZAME",
            description: "Diseño de la interfaz de usuario para una plataforma de Alquiler o venta de Inmuebles",
            images: [
                "/inmobiliaria_Rivaldo Zarate.png",
            ],
            link: "https://tuproyecto1.com",
            technologies: ["Figma", "Adobe XD"]
        },
        {
            id: 2,
            title: "Diseño UX/UI LigaFut",
            description: "Diseño de la interfaz de usuario para una plataforma de Resultados de Futbol",
            images: [
                "/LigaFut_Rivaldo Zarate.png",
            ],
            link: "https://tuproyecto2.com",
            technologies: ["Figma", "Adobe XD"]
        }
    ];

    useEffect(() => {
        // Animación de entrada escalonada para los proyectos
        const timer = setTimeout(() => {
            setAnimatedProjects(projects.map(p => p.id));
        }, 300);
        
        return () => clearTimeout(timer);
    }, []);

    // Solución radical para el problema de la galería
    const openGallery = useCallback((project, index) => {
        // Crear un elemento modal completamente nuevo
        const modalContainer = document.createElement('div');
        modalContainer.className = 'gallery-modal-container';
        document.body.appendChild(modalContainer);
        
        // Bloquear el scroll del body
        document.body.style.overflow = 'hidden';
        
        // Renderizar el contenido del modal directamente en el DOM
        modalContainer.innerHTML = `
            <div class="gallery-modal-overlay" onclick="document.querySelector('.gallery-modal-container').remove(); document.body.style.overflow = '';">
                <div class="gallery-modal-content" onclick="event.stopPropagation()">
                    <div class="gallery-modal-header">
                        <h3>${project.title}</h3>
                        <button class="gallery-modal-close" onclick="document.querySelector('.gallery-modal-container').remove(); document.body.style.overflow = '';">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="gallery-modal-image">
                        <img src="${project.images[index]}" alt="${project.title}">
                    </div>
                    <div class="gallery-modal-footer">
                        <div class="gallery-modal-tech">
                            ${project.technologies.map(tech => `
                                <span class="tech-tag">
                                    <i class="fas fa-code"></i> ${tech}
                                </span>
                            `).join('')}
                        </div>
                       
                    </div>
                </div>
            </div>
        `;
        
        // Añadir estilos inline para asegurar que funcione
        const style = document.createElement('style');
        style.textContent = `
            .gallery-modal-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
            }
            .gallery-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(10, 25, 47, 0.9);
                backdrop-filter: blur(5px);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                box-sizing: border-box;
            }
            .gallery-modal-content {
                background: var(--light-navy, #112240);
                border-radius: 20px;
                width: 90%;
                max-width: 1000px;
                max-height: 90vh;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
                animation: zoomIn 0.3s ease;
            }
            @keyframes zoomIn {
                from { transform: scale(0.95); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            .gallery-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 1.5rem;
                border-bottom: 1px solid rgba(100, 255, 218, 0.1);
            }
            .gallery-modal-header h3 {
                color: #ccd6f6;
                margin: 0;
            }
            .gallery-modal-close {
                background: none;
                border: none;
                color: #8892b0;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
            }
            .gallery-modal-close:hover {
                color: #64ffda;
            }
            .gallery-modal-image {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(10, 25, 47, 0.5);
                overflow: hidden;
                min-height: 200px;
            }
            .gallery-modal-image img {
                max-width: 100%;
                max-height: 60vh;
                object-fit: contain;
            }
            .gallery-modal-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 1.5rem;
                border-top: 1px solid rgba(100, 255, 218, 0.1);
            }
            .gallery-modal-tech {
                display: flex;
                flex-wrap: wrap;
                gap: 0.8rem;
            }
            .tech-tag {
                background: rgba(100, 255, 218, 0.1);
                color: #64ffda;
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-size: 0.9rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .project-link {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                background: #64ffda;
                color: #0a192f;
                padding: 0.8rem 1.5rem;
                border-radius: 30px;
                text-decoration: none;
                font-weight: 600;
            }
            @media (max-width: 768px) {
                .gallery-modal-content {
                    width: 95%;
                }
                .gallery-modal-image img {
                    max-height: 50vh;
                }
            }
            @media (max-width: 480px) {
                .gallery-modal-overlay {
                    padding: 10px;
                }
                .gallery-modal-content {
                    width: 98%;
                    max-height: 85vh;
                }
                .gallery-modal-header, .gallery-modal-footer {
                    padding: 0.75rem 1rem;
                }
                .gallery-modal-tech {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
        
        // No necesitamos usar los estados de React para esta solución
    }, []);

    return (
        <div className="projects-section">
            <div className="projects-header">
                <h2>
                    <span className="accent-text">Mis</span> Proyectos
                    <div className="header-line"></div>
                </h2>
                <p className="projects-intro">
                    Explora algunos de mis trabajos recientes
                </p>
            </div>
            
            <div className="projects-container">
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className={`project-card ${animatedProjects.includes(project.id) ? 'animate-in' : ''}`}
                    >
                        <div className="project-card-inner">
                            <div className="project-image-container">
                                <div className={`project-images-grid ${project.images.length === 1 ? 'single-image' : ''}`}>
                                    {project.images.slice(0, 4).map((image, index) => (
                                        <div 
                                            key={index}
                                            className={`project-image-thumbnail ${project.images.length === 1 ? 'full-width' : ''}`}
                                            onClick={() => openGallery(project, index)}
                                        >
                                            <img 
                                                src={image} 
                                                alt={`${project.title} ${index + 1}`}
                                                loading="lazy"
                                            />
                                            <div className="image-overlay">
                                                <div className="overlay-content">
                                                    <i className="fas fa-search-plus"></i>
                                                    <span>Ver galería</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                
                                <div className="technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            <i className="fas fa-code"></i> {tech}
                                        </span>
                                    ))}
                                </div>
                                {/*
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <span>Ver Proyecto</span>
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                                */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Eliminamos el popup de React y usamos la solución basada en DOM */}
        </div>
    );
}; 