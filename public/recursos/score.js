const conexion= require('./conexion');

module.exports = app =>{
    const con=conexion();

    app.get('/', (req, res) =>{
        con.query('SELECT * FROM puntuaciones', (err,result) =>{
            console.log(result);
            res.render('index.ejs',{
                registro: result
            });
        });
    }); 

    /*app.post('/', (req, res)=>{
        console.log(req.body);
    });*/
}