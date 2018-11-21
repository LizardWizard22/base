module.exports = function ( app){
    app.get('/login', (req, res, next)=>{
        res.send('Login 1');
      });
    app.post('/login', (req, res, next)=>{
        res.send('Login 2');
     });
    };