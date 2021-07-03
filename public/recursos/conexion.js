const mysql = require('mysql');

module.exports = () =>{
    return mysql.createConnection({
        host:"us-cdbr-east-04.cleardb.com",
        user:"b94cca5baae069",
        password:"0b4080e7",
        database:"heroku_238f010ee41bd1d"
    });
}