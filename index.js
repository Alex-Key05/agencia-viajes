import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir el puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    next();
});

// Definir la carpeta pública
app.use(express.static('public'));

// Agregar el router
app.use('/', router);

app.listen(port, (req, res) => {
    console.log(`El Servidor está funcionando en el puerto ${port}`);
});