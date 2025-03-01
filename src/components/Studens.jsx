import React, { useState, useEffect } from 'react';

export function Studens() {
    const [animatedSections, setAnimatedSections] = useState({
        university: false,
        certificates: false
    });
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    
    const certificates = [
        {
            id: 1,
            title: "API REST CON LARAVEL 8",
            description: "Desarrollo de una API REST con Laravel 8",
            pdfUrl: "/pdf/diploma-laravel-api.pdf",
            year: "2024",
            color: "#64ffda"
        },
        {
            id: 2,
            title: "Certificado Introducción a Laravel",
            description: "Introducción a Laravel",
            pdfUrl: "/pdf/diploma-intro-laravel-2020.pdf",
            year: "2024",
            color: "#ff6464"
        },
        {
            id: 3,
            title: "Certificado Introducción a Laravel 8",
            description: "Introducción a Laravel 8",
            pdfUrl: "/pdf/diploma-intro-laravel8 (1).pdf",
            year: "2024",
            color: "#64a0ff"
        },
        {
            id: 4,
            title: "Certificado laravel testing",
            description: "Pruebas de Software con Laravel",
            pdfUrl: "/pdf/diploma-laravel-testing.pdf",
            year: "2024",
            color: "#ffb764"
        },
        {
            id: 5,
            title: "Certificado PHP",
            description: "Curso de PHP",
            pdfUrl: "/pdf/diploma-php.pdf",
            year: "2024",
            color: "#a064ff"
        },
        {
            id: 6,
            title: "Certificado Master en PHP",
            description: "Master en PHP",
            pdfUrl: "/pdf/UC-2d6448f5-1924-4a61-b314-e701f6961e77 (2).pdf",
            year: "2024",
            color: "#64ffb7"
        },
    ];

    useEffect(() => {
        // Animación de entrada escalonada
        const universityTimer = setTimeout(() => {
            setAnimatedSections(prev => ({ ...prev, university: true }));
        }, 300);
        
        const certificatesTimer = setTimeout(() => {
            setAnimatedSections(prev => ({ ...prev, certificates: true }));
        }, 600);
        
        return () => {
            clearTimeout(universityTimer);
            clearTimeout(certificatesTimer);
        };
    }, []);

    // Función para manejar errores de carga de PDF
    const handlePdfError = (e) => {
        e.target.style.display = 'none';
        e.target.nextElementSibling.style.display = 'block';
    };
    
    // Función para abrir el modal del certificado
    const openCertificateModal = (certificate) => {
        setSelectedCertificate(certificate);
        document.body.style.overflow = 'hidden';
    };
    
    // Función para cerrar el modal del certificado
    const closeCertificateModal = () => {
        setSelectedCertificate(null);
        document.body.style.overflow = '';
    };

    return (
        <div className="studies-container">
            <div className="studies-header">
                <div className="studies-title-container">
                    <h2 className="studies-title">
                        <span className="accent-text">Estudios</span> y Certificaciones
                    </h2>
                    <div className="title-underline"></div>
                </div>
                <p className="studies-intro">
                    Mi formación académica y certificaciones profesionales
                </p>
            </div>
            
            {/* Sección Universidad */}
            <section className={`university-section ${animatedSections.university ? 'animate-in' : ''}`}>
                <div className="section-header">
                    <h3 className="section-title">
                        <span className="accent-text">Formación</span> Universitaria
                    </h3>
                    <div className="title-underline"></div>
                </div>
                
                <div className="university-card">
                    <div className="university-icon">
                        <i className="fas fa-university"></i>
                    </div>
                    <div className="university-content">
                        <h4 className="university-name">Universidad Católica de Nuestra Señora de la Asunción</h4>
                        <p className="university-location">Unidad Pedagógica de Carapeguá</p>
                        <div className="university-degree">
                            <span className="degree-title">Licenciatura en Análisis de Sistemas Informáticos</span>
                            <span className="degree-year">2020 - 2023</span>
                        </div>
                        <p className="university-description">
                            Formación integral en análisis, diseño y desarrollo de sistemas informáticos, con énfasis en 
                            metodologías de desarrollo, bases de datos, programación y gestión de proyectos tecnológicos.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Sección Certificaciones */}
            <section className={`certificates-section ${animatedSections.certificates ? 'animate-in' : ''}`}>
                <div className="section-header">
                    <h3 className="section-title">
                        <span className="accent-text">Certificaciones</span> Profesionales
                    </h3>
                    <div className="title-underline"></div>
                </div>
                
                <div className="certificates-grid">
                    {certificates.map((cert) => (
                        <div 
                            key={cert.id} 
                            className="certificate-card"
                            style={{'--certificate-color': cert.color}}
                            onClick={() => openCertificateModal(cert)}
                        >
                            <div className="certificate-icon">
                                <i className="fas fa-certificate"></i>
                            </div>
                            <div className="certificate-content">
                                <h4 className="certificate-title">{cert.title}</h4>
                                <p className="certificate-description">{cert.description}</p>
                                <div className="certificate-footer">
                                    <span className="certificate-year">
                                        <i className="far fa-calendar-alt"></i> {cert.year}
                                    </span>
                                    <span className="view-certificate">
                                        Ver certificado <i className="fas fa-external-link-alt"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Modal para ver certificado */}
            {selectedCertificate && (
                <div className="certificate-modal-overlay" onClick={closeCertificateModal}>
                    <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="certificate-modal-header" style={{borderColor: `${selectedCertificate.color}40`}}>
                            <h3>{selectedCertificate.title}</h3>
                            <button className="certificate-modal-close" onClick={closeCertificateModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="certificate-modal-body">
                            <iframe
                                src={selectedCertificate.pdfUrl}
                                title={selectedCertificate.title}
                                className="certificate-iframe"
                                onError={handlePdfError}
                            ></iframe>
                            <div className="pdf-error" style={{display: 'none'}}>
                                <p>No se pudo cargar el PDF. <a href={selectedCertificate.pdfUrl} target="_blank" rel="noopener noreferrer">Haz clic aquí para verlo</a></p>
                            </div>
                        </div>
                        <div className="certificate-modal-footer" style={{borderColor: `${selectedCertificate.color}40`}}>
                            <span className="certificate-year">
                                <i className="far fa-calendar-alt"></i> {selectedCertificate.year}
                            </span>
                            <a 
                                href={selectedCertificate.pdfUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="download-btn"
                                style={{background: selectedCertificate.color}}
                            >
                                Ver PDF completo <i className="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 