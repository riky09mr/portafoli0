const About = () => {
    // Credenciales de admin
    const ADMIN_CREDENTIALS = {
        username: 'rivaldo',
        password: '041122sr'
    };

    // Estados para testimonios
    const [testimonials, setTestimonials] = React.useState([]);

    // Cargar testimonios al inicio
    React.useEffect(() => {
        const loadTestimonials = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/testimonials');
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error('Error al cargar testimonios:', error);
            }
        };

        loadTestimonials();
    }, []);

    // Estados para el formulario
    const [showForm, setShowForm] = React.useState(false);
    const [formData, setFormData] = React.useState({
        text: '',
        author: ''
    });
    const [editingId, setEditingId] = React.useState(null);

    // Estados para admin
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [showLoginForm, setShowLoginForm] = React.useState(false);
    const [loginData, setLoginData] = React.useState({
        username: '',
        password: ''
    });

    // Estado para la trayectoria con localStorage
    const [timeline, setTimeline] = React.useState(() => {
        const savedTimeline = localStorage.getItem('timeline');
        return savedTimeline ? JSON.parse(savedTimeline) : [
            {
                id: 1,
                title: "Desarrollador Full Stack - Empresa XYZ",
                period: "2021 - Presente",
                description: "Lideré proyectos de desarrollo web usando React y Node.js, optimizando la experiencia de usuario en aplicaciones de alto impacto."
            },
            {
                id: 2,
                title: "Diseñador UX/UI - Startup ABC",
                period: "2019 - 2021",
                description: "Diseñé interfaces centradas en el usuario utilizando Figma y metodologías ágiles, logrando aumentar la retención de usuarios en un 30%."
            },
            {
                id: 3,
                title: "Estudiante - Ingeniería en Computación",
                period: "2015 - 2019",
                description: "Durante mi carrera, aprendí los fundamentos del desarrollo web y participé en proyectos académicos que fortalecieron mi pasión por la tecnología."
            }
        ];
    });

    // Guardar en localStorage cuando timeline cambie
    React.useEffect(() => {
        localStorage.setItem('timeline', JSON.stringify(timeline));
    }, [timeline]);

    // Estados para el formulario de trayectoria
    const [showTimelineForm, setShowTimelineForm] = React.useState(false);
    const [timelineData, setTimelineData] = React.useState({
        title: '',
        startDate: '',
        endDate: '',
        description: ''
    });
    const [editingTimelineId, setEditingTimelineId] = React.useState(null);

    // Verificar sesión de admin
    React.useEffect(() => {
        const adminStatus = localStorage.getItem('isAdmin');
        if (adminStatus === 'true') {
            setIsAdmin(true);
        }
    }, []);

    // Funciones para testimonios
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                const response = await fetch(`http://localhost:5000/api/testimonials/${editingId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                const updatedTestimonial = await response.json();
                
                setTestimonials(testimonials.map(t => 
                    t.id === editingId ? updatedTestimonial : t
                ));
            } else {
                const response = await fetch('http://localhost:5000/api/testimonials', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                const newTestimonial = await response.json();
                setTestimonials([...testimonials, newTestimonial]);
            }

            setFormData({ text: '', author: '' });
            setShowForm(false);
            setEditingId(null);
        } catch (error) {
            console.error('Error al guardar testimonio:', error);
            alert('Error al guardar el testimonio. Por favor, intenta nuevamente.');
        }
    };

    const handleEdit = (testimonial) => {
        setFormData({ 
            text: testimonial.text, 
            author: testimonial.author 
        });
        setEditingId(testimonial.id);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este testimonio?')) {
            try {
                await fetch(`http://localhost:5000/api/testimonials/${id}`, {
                    method: 'DELETE'
                });
                setTestimonials(testimonials.filter(t => t.id !== id));
            } catch (error) {
                console.error('Error al eliminar testimonio:', error);
                alert('Error al eliminar el testimonio. Por favor, intenta nuevamente.');
            }
        }
    };

    // Funciones para admin
    const handleLogin = (e) => {
        e.preventDefault();
        if (loginData.username === ADMIN_CREDENTIALS.username && 
            loginData.password === ADMIN_CREDENTIALS.password) {
            setIsAdmin(true);
            localStorage.setItem('isAdmin', 'true');
            setShowLoginForm(false);
            setLoginData({ username: '', password: '' });
        } else {
            alert('Credenciales incorrectas');
        }
    };

    const handleLogout = () => {
        setIsAdmin(false);
        localStorage.removeItem('isAdmin');
    };

    // Funciones para manejar la trayectoria
    const handleTimelineSubmit = (e) => {
        e.preventDefault();
        const formattedPeriod = formatPeriod(timelineData.startDate, timelineData.endDate);
        
        if (editingTimelineId) {
            const updatedTimeline = timeline.map(item => 
                item.id === editingTimelineId ? 
                { 
                    ...item, 
                    title: timelineData.title,
                    period: formattedPeriod,
                    description: timelineData.description 
                } : 
                item
            );
            setTimeline(updatedTimeline);
            setEditingTimelineId(null);
        } else {
            const newItem = {
                id: Date.now(),
                title: timelineData.title,
                period: formattedPeriod,
                description: timelineData.description
            };
            setTimeline([newItem, ...timeline]); // Agregar al principio
        }
        setTimelineData({ title: '', startDate: '', endDate: '', description: '' });
        setShowTimelineForm(false);
    };

    const handleTimelineEdit = (item) => {
        // Parsea el período actual (ejemplo: "Enero 2021 - Presente")
        const [startStr, endStr] = item.period.split(' - ');
        
        // Convierte las fechas al formato YYYY-MM
        const parseDate = (dateStr) => {
            if (dateStr === 'Presente') return '';
            const date = new Date(dateStr);
            return date.toISOString().slice(0, 7); // Formato YYYY-MM
        };

        setTimelineData({
            title: item.title,
            startDate: parseDate(startStr),
            endDate: parseDate(endStr),
            description: item.description
        });
        setEditingTimelineId(item.id);
        setShowTimelineForm(true);
    };

    const handleTimelineDelete = (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta entrada?')) {
            const updatedTimeline = timeline.filter(item => item.id !== id);
            setTimeline(updatedTimeline);
        }
    };

    // Función para formatear el período
    const formatPeriod = (startDate, endDate) => {
        const formatDate = (dateString) => {
            if (!dateString) return 'Presente';
            const date = new Date(dateString);
            return date.toLocaleDateString('es-ES', { 
                year: 'numeric',
                month: 'long'
            });
        };

        const start = formatDate(startDate);
        const end = formatDate(endDate);
        
        return `${start} - ${end}`;
    };

    return (
        <div className="about-page">
            {/* Admin Controls */}
            <div className="admin-controls">
                {isAdmin ? (
                    <button 
                        className="admin-logout-btn"
                        onClick={handleLogout}
                    >
                        <i className="fas fa-sign-out-alt"></i> Cerrar Sesión
                    </button>
                ) : (
                    <button 
                        className="admin-login-btn"
                        onClick={() => setShowLoginForm(true)}
                    >
                        <i className="fas fa-lock"></i>
                    </button>
                )}
            </div>

            {/* Introducción */}
            <section className="about-intro">
                <h1>Sobre mí</h1>
                <p>
                    Soy Rivaldo Zárate, un desarrollador Full Stack con experiencia en 
                    construir aplicaciones web innovadoras y diseñar interfaces intuitivas. 
                    Mi pasión por la tecnología y el diseño me permite conectar creatividad 
                    con funcionalidad para resolver problemas reales.
                </p>
            </section>

            {/* Timeline de experiencia */}
            <section className="experience-timeline">
                <div className="section-header">
                    <h2>Mi Trayectoria {isAdmin && (
                        <button 
                            className="add-timeline-btn"
                            onClick={() => {
                                setEditingTimelineId(null);
                                setTimelineData({ title: '', startDate: '', endDate: '', description: '' });
                                setShowTimelineForm(true);
                            }}
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    )}</h2>
                </div>

                <div className="timeline">
                    {[...timeline]
                        .sort((a, b) => {
                            // Obtener la fecha de inicio de cada elemento
                            const getStartDate = (period) => {
                                const startStr = period.split(' - ')[0];
                                return new Date(startStr);
                            };
                            
                            // Ordenar de más reciente a más antiguo
                            return getStartDate(b.period) - getStartDate(a.period);
                        })
                        .map(item => (
                            <div key={item.id} className="timeline-item">
                                <div className="timeline-content">
                                    <h3>{item.title}</h3>
                                    <span className="timeline-date">{item.period}</span>
                                    <p>{item.description}</p>
                                    {isAdmin && (
                                        <div className="timeline-actions">
                                            <button 
                                                onClick={() => handleTimelineEdit(item)}
                                                className="edit-btn"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button 
                                                onClick={() => handleTimelineDelete(item.id)}
                                                className="delete-btn"
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                </div>

                {/* Formulario de Trayectoria */}
                {showTimelineForm && (
                    <div className="modal-container">
                        <form onSubmit={handleTimelineSubmit} className="timeline-form">
                            <h3>{editingTimelineId ? 'Editar Experiencia' : 'Nueva Experiencia'}</h3>
                            <input
                                type="text"
                                value={timelineData.title}
                                onChange={(e) => setTimelineData({
                                    ...timelineData,
                                    title: e.target.value
                                })}
                                placeholder="Título del puesto"
                                required
                            />
                            <div className="date-inputs">
                                <div className="date-field">
                                    <label>Fecha de inicio:</label>
                                    <input
                                        type="month"
                                        value={timelineData.startDate}
                                        onChange={(e) => setTimelineData({
                                            ...timelineData,
                                            startDate: e.target.value
                                        })}
                                        required
                                    />
                                </div>
                                <div className="date-field">
                                    <label>Fecha de fin:</label>
                                    <input
                                        type="month"
                                        value={timelineData.endDate}
                                        onChange={(e) => setTimelineData({
                                            ...timelineData,
                                            endDate: e.target.value
                                        })}
                                        placeholder="Dejar vacío si es actual"
                                    />
                                </div>
                            </div>
                            <textarea
                                value={timelineData.description}
                                onChange={(e) => setTimelineData({
                                    ...timelineData,
                                    description: e.target.value
                                })}
                                placeholder="Descripción de tus responsabilidades..."
                                required
                            />
                            <div className="form-buttons">
                                <button type="submit">
                                    {editingTimelineId ? 'Guardar Cambios' : 'Agregar'}
                                </button>
                                <button 
                                    type="button" 
                                    onClick={() => {
                                        setShowTimelineForm(false);
                                        setEditingTimelineId(null);
                                    }}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </section>

            {/* Testimonios */}
            <section className="testimonials">
                <h2>Testimonios</h2>
                <button 
                    className="add-testimonial-btn"
                    onClick={() => {
                        setEditingId(null);
                        setFormData({ text: '', author: '' });
                        setShowForm(true);
                    }}
                >
                    Agregar Testimonio
                </button>

                {/* Modal de Login */}
                {showLoginForm && (
                    <div className="modal-container">
                        <form onSubmit={handleLogin} className="admin-form">
                            <h3>Acceso Administrador</h3>
                            <input
                                type="text"
                                value={loginData.username}
                                onChange={(e) => setLoginData({
                                    ...loginData,
                                    username: e.target.value
                                })}
                                placeholder="Usuario"
                                required
                            />
                            <input
                                type="password"
                                value={loginData.password}
                                onChange={(e) => setLoginData({
                                    ...loginData,
                                    password: e.target.value
                                })}
                                placeholder="Contraseña"
                                required
                            />
                            <div className="form-buttons">
                                <button type="submit">Acceder</button>
                                <button 
                                    type="button" 
                                    onClick={() => {
                                        setShowLoginForm(false);
                                        setLoginData({ username: '', password: '' });
                                    }}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Formulario de Testimonios */}
                {showForm && (
                    <div className="modal-container">
                        <form onSubmit={handleSubmit} className="testimonial-form">
                            <h3>{editingId ? 'Editar Testimonio' : 'Nuevo Testimonio'}</h3>
                            <textarea
                                value={formData.text}
                                onChange={(e) => setFormData({...formData, text: e.target.value})}
                                placeholder="Tu testimonio..."
                                required
                            />
                            <input
                                type="text"
                                value={formData.author}
                                onChange={(e) => setFormData({...formData, author: e.target.value})}
                                placeholder="Tu nombre"
                                required
                            />
                            <div className="form-buttons">
                                <button type="submit">
                                    {editingId ? 'Guardar Cambios' : 'Agregar'}
                                </button>
                                <button 
                                    type="button" 
                                    onClick={() => {
                                        setShowForm(false);
                                        setEditingId(null);
                                    }}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Lista de Testimonios */}
                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <blockquote key={testimonial.id} className="testimonial-card">
                            <p>{testimonial.text}</p>
                            <footer>
                                - {testimonial.author}
                                <span className="testimonial-date">
                                    {testimonial.date}
                                </span>
                                {isAdmin && (
                                    <div className="testimonial-actions">
                                        <button 
                                            onClick={() => handleEdit(testimonial)}
                                            className="edit-btn"
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(testimonial.id)}
                                            className="delete-btn"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                )}
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </section>
        </div>
    );
};

// Hacer el componente disponible globalmente
window.About = About;
