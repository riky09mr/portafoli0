import React from 'react';

export function Studens() {
    const certificates = [
        {
            title: "API REST CON LARAVEL 8",
            description: "Desarrollo de una API REST con Laravel 8",
            pdfUrl: "/pdf/diploma-laravel-api.pdf",
            year: "2024"
        },
        {
            title: "Certificado Introducción a Laravel",
            description: "Introducción a Laravel",
            pdfUrl: "/pdf/diploma-intro-laravel-2020.pdf",
            year: "2024"
        },
        {
            title: "Certificado Introducción a Laravel 8",
            description: "Introducción a Laravel 8",
            pdfUrl: "/pdf/diploma-intro-laravel8 (1).pdf",
            year: "2024"
        },
        {
            title: "Certificado laravel testing",
            description: "Pruebas de Software con Laravel",
            pdfUrl: "/pdf/diploma-laravel-testing.pdf",
            year: "2024"
        },
        {
            title: "Certificado PHP",
            description: "Curso de PHP",
            pdfUrl: "/pdf/diploma-php.pdf",
            year: "2024"
        },
        {
            title: "Certificado Master en PHP",
            description: "Master en PHP",
            pdfUrl: "/pdf/UC-2d6448f5-1924-4a61-b314-e701f6961e77 (2).pdf",
            year: "2024"
        },
    ];

    // Función para manejar errores de carga de PDF
    const handlePdfError = (e) => {
        e.target.style.display = 'none';
        e.target.nextElementSibling.style.display = 'block';
    };

    return (
        <div className="studies-container">
            <h2>Estudios y Certificaciones</h2>
            <div className="certificates-grid">
                {certificates.map((cert, index) => (
                    <div key={index} className="certificate-card">
                        <div className="pdf-viewer">
                            <iframe
                                src={cert.pdfUrl}
                                title={cert.title}
                                frameBorder="0"
                                onError={handlePdfError}
                            ></iframe>
                            <div className="pdf-error" style={{display: 'none'}}>
                                <p>No se pudo cargar el PDF. <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">Haz clic aquí para verlo</a></p>
                            </div>
                        </div>
                        <div className="certificate-info">
                            <h3>{cert.title}</h3>
                            <p>{cert.description}</p>
                            <span className="year">{cert.year}</span>
                            <a 
                                href={cert.pdfUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="download-btn"
                            >
                                Ver PDF completo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 