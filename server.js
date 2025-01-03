const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'portfolio'
});

// Conectar a MySQL
db.connect(err => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL');
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'API funcionando correctamente' });
});

// Obtener todos los testimonios
app.get('/api/testimonials', (req, res) => {
    db.query('SELECT * FROM testimonials ORDER BY date DESC', (err, results) => {
        if (err) {
            console.error('Error obteniendo testimonios:', err);
            res.status(500).json({ error: 'Error al obtener testimonios' });
            return;
        }
        res.json(results);
    });
});

// Agregar un testimonio
app.post('/api/testimonials', (req, res) => {
    const { text, author } = req.body;
    db.query(
        'INSERT INTO testimonials (text, author) VALUES (?, ?)',
        [text, author],
        (err, result) => {
            if (err) {
                console.error('Error agregando testimonio:', err);
                res.status(500).json({ error: 'Error al agregar testimonio' });
                return;
            }
            res.status(201).json({ 
                id: result.insertId,
                text,
                author,
                date: new Date()
            });
        }
    );
});

// Actualizar un testimonio
app.put('/api/testimonials/:id', (req, res) => {
    const { text, author } = req.body;
    const { id } = req.params;
    
    db.query(
        'UPDATE testimonials SET text = ?, author = ? WHERE id = ?',
        [text, author, id],
        (err) => {
            if (err) {
                console.error('Error actualizando testimonio:', err);
                res.status(500).json({ error: 'Error al actualizar testimonio' });
                return;
            }
            res.json({ id, text, author });
        }
    );
});

// Eliminar un testimonio
app.delete('/api/testimonials/:id', (req, res) => {
    const { id } = req.params;
    
    db.query('DELETE FROM testimonials WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('Error eliminando testimonio:', err);
            res.status(500).json({ error: 'Error al eliminar testimonio' });
            return;
        }
        res.json({ message: 'Testimonio eliminado' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en:`);
    console.log(`- Local: http://localhost:${PORT}`);
    console.log(`- API testimonios: http://localhost:${PORT}/api/testimonials`);
});
