const app = require('./public/server');
require ('./public/score')(app);

app.listen(app.get('port'), ()=>{
  console.log('server on port', app.get('port'));
});
