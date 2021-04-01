const codigo1 = { 'Codigo': '3010', 'Estado': 'Ok', 'url': '/img/algopoco.jpg' };
const codigo2 = { 'Codigo': '3020 ', 'Estado': 'Ok', 'url': '/img/noseamor.jpg' };
const codigo3 = { 'Codigo': '3030', 'Estado': 'Ok', 'url': '/img/regalito.jpg' };
const codigo4 = { 'Codigo': '!== 3010, 3020, 3030', 'Estado': 'Ok', 'url': '/img/aveeer.jpg' };
const nodemailer = require('nodemailer');


function cargarData(req, res) {
    var codigo = req.body.codigo;
    var result = PasarPorTalca(codigo);
    const {canje} = req.body;
    
    contentHTML = `
            <h1>Canje</h1>
            <ul>
                <li>TestCodigo = ${canje} </li>
            </ul>
        `;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, 
            auth: {
              user: "solicitudcupon@gmail.com", 
              pass: "darbeta12", 
            }
          });

          let info = transporter.sendMail({
            from: "'Solicitud de canje' <solicitudcupon@gmail.com>", 
            to: "sherked3@gmail.com", 
            subject: "Test Prueba", 
            text: result, 
            html: "<b>Se ha enviado un canje con el código </b>" + result, 
          });


        
        
    res.render('imagen.html', { title: 'La Media Imagen', ruta : result });
    console.log(contentHTML);
}

function PasarPorTalca(cupon) {
    switch (cupon) {
        case '3010':
            return codigo1.url;
            break;
        case '3020':
            return codigo2.url;
            break;
        case '3030':
            return codigo3.url;
            break;
        default:
            return codigo4.url;

    }

}

module.exports = { cargarData };