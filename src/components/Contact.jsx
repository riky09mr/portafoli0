import React from 'react';

export const Contact = () => {
    return (
        <div className="contact-container">
            <div className="header-section">
                <h2>Contacto</h2>
                <p>Puedes contactarme a través de los siguientes medios:</p>
            </div>
            
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <p>zaraniegoandres@gmail.com</p>
                        </div>
                        
                        <div className="contact-item">
                            <i className="fab fa-linkedin"></i>
                            <a href="https://www.linkedin.com/in/rivaldo-zarate-49638a1a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/rivaldo-zarate
                            </a>
                        </div>
                        
                        <div className="contact-item">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/riky09mr-" target="_blank" rel="noopener noreferrer">
                                github.com/mrriky09
                            </a>
                        </div>
                        
                        <div className="contact-item">
                            <i className="fab fa-twitter"></i>
                            <a href="https://twitter.com/rivaldo_zarate" target="_blank" rel="noopener noreferrer">
                                @rivaldo_zarate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
};
