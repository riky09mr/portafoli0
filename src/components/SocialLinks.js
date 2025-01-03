import React from 'react';

export const SocialLinks = () => {
    return (
        <div className="social-links-fixed">
            <a href="https://www.linkedin.com/in/tu-perfil" 
               target="_blank" 
               rel="noopener noreferrer"
               title="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/tu-usuario" 
               target="_blank" 
               rel="noopener noreferrer"
               title="GitHub">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://twitter.com/tu-usuario" 
               target="_blank" 
               rel="noopener noreferrer"
               title="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://instagram.com/tu-usuario" 
               target="_blank" 
               rel="noopener noreferrer"
               title="Instagram">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://wa.me/595981XXXXXX" 
               target="_blank" 
               rel="noopener noreferrer"
               title="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </div>
    );
}; 