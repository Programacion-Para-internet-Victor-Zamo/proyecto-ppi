const conexion= require('./conexion');

module.exports = app =>{
    const con=conexion();

    //Se realiza la cosulta para mostrar la tabla de las puntuaciones
    app.get('/', (req, res) =>{
        con.query('SELECT * FROM puntuaciones ORDER BY Puntaje DESC', (err,result) =>{
            console.log(result);
            res.render('index.ejs',{
                registro: result
            });
        });
    }); 

    //Se realiza la consulta para insetar registros a la base de datos
    app.post('/news', (req, res) => {
        //console.log("Hola");
        console.log(req.body);
        const {nombre, puntaje} = req.body;
        con.query('INSERT INTO puntuaciones SET?',{
            Nombre:nombre,
            Puntaje:puntaje
        }, (err, result)=>{
            res.redirect('/');
        });
      });
}