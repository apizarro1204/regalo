const express = require('express');
const router = express.Router();
const cargar = require('../controllers/cargar');
router.post('/cargaImagen',cargar.cargarData);



router.get('/', function (req, res) {
    res.render('index.html', { title: 'My Page Shark'});
});

router.get('/index', function (req, res) {
    res.render('index.html', { title: 'My Page Shark'});
});

router.get('/contact', function (req, res){
    res.render('contact.html', {title: 'Contact Page'});
});

router.get('/blog', function (req, res){
    res.render('blog.html', {title: 'Help Page'});
});

router.get('/about', function (req, res){
    res.render('about.html', {title: 'About Us'});
});


router.post('/cargaImagen',cargar.cargarData);



router.get('/imagen', function (req, res){
    res.render('imagen.html', {title: 'Imagen'});
});



module.exports = router;