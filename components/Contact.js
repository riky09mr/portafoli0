const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = React.useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: "Por favor, ingresa un correo electrónico válido." }
            });
            return false;
        }
        if (formData.message.length < 10) {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: "El mensaje debe tener al menos 10 caracteres." }
            });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

        try {
            await emailjs.send(
                "service_cc1ds6n",
                "template_i3ym37i",
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: "Rivaldo"
                }
            );

            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: "¡Mensaje enviado con éxito!" }
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            setTimeout(() => {
                setStatus({
                    submitted: false,
                    submitting: false,
                    info: { error: false, msg: null }
                });
            }, 3000);

        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente." }
            });
        }
    };

    return (
        <div className="contact-container">
            <div className="header-section">
                <h2>Envíame un mensaje</h2>
            </div>
            
            <div className="contact-content">
                <div className="contact-info">
                    <h3>Información de contacto</h3>
                    <div className="contact-details">
                        <p><i className="fas fa-envelope"></i> correo@ejemplo.com</p>
                        <p><i className="fab fa-linkedin"></i> linkedin.com/in/tu-perfil</p>
                        <p><i className="fab fa-github"></i> github.com/tu-usuario</p>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Nombre completo" 
                                required 
                                minLength="2"
                                maxLength="50"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Correo electrónico" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="Asunto" 
                                required 
                                minLength="3"
                                maxLength="100"
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Tu mensaje" 
                                rows="5" 
                                required 
                                minLength="10"
                                maxLength="1000"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="submit-btn"
                            disabled={status.submitting}
                        >
                            {status.submitting ? (
                                <div className="loading-state">
                                    <i className="fas fa-spinner fa-spin"></i> Enviando...
                                </div>
                            ) : 'Enviar Mensaje'}
                        </button>

                        {status.info.msg && (
                            <div className={`form-message ${status.info.error ? 'error' : 'success'}`}>
                                {status.info.msg}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

// Hacer el componente disponible globalmente
window.Contact = Contact;
