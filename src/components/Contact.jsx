import React from 'react';

export const Contact = () => {
    const contactInfo = [
        {
            id: 1,
            type: "email",
            value: "zaraniegoandres@gmail.com",
            icon: "fas fa-envelope",
            link: "mailto:zaraniegoandres@gmail.com",
            label: "Correo Electrónico"
        },
        {
            id: 2,
            type: "linkedin",
            value: "linkedin.com/in/rivaldo-zarate",
            icon: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/rivaldo-zarate-49638a1a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            label: "LinkedIn"
        },
        {
            id: 3,
            type: "github",
            value: "github.com/mrriky09",
            icon: "fab fa-github",
            link: "https://github.com/riky09mr-",
            label: "GitHub"
        },
        {
            id: 4,
            type: "twitter",
            value: "@rivaldo_zarate",
            icon: "fab fa-twitter",
            link: "https://twitter.com/rivaldo_zarate",
            label: "Twitter"
        }
    ];

    const socialLinks = [
        {
            id: 1,
            icon: "fab fa-instagram",
            label: "Instagram",
            value: "@rivanza09",
            link: "https://www.instagram.com/rivanza09?igsh=MXBnOGltODVsZXBvNw%3D%3D&utm_source=qr"
        },
        {
            id: 2,
            icon: "fab fa-whatsapp",
            label: "WhatsApp",
            value: "+595 991630725",
            link: "https://wa.me/595991630725"
        }
    ];

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h2>
                    <span className="title-icon">
                        <i className="fas fa-paper-plane"></i>
                    </span>
                    Contacto
                </h2>
                <p>¡Conectemos! Estas son las mejores formas de contactarme</p>
            </div>
            
            <div className="contact-cards-container">
                <div className="contact-grid">
                    {contactInfo.map(item => (
                        <div key={item.id} className="contact-card">
                            <div className="contact-icon-wrapper">
                                <i className={item.icon}></i>
                            </div>
                            <div className="contact-info">
                                <h3>{item.label}</h3>
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    {item.value}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="contact-footer">
                <p>También puedes encontrarme en otras plataformas</p>
                <div className="contact-grid social-grid">
                    {socialLinks.map(item => (
                        <div key={item.id} className="contact-card">
                            <div className="contact-icon-wrapper">
                                <i className={item.icon}></i>
                            </div>
                            <div className="contact-info">
                                <h3>{item.label}</h3>
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    {item.value}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
