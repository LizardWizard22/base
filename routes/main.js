module.exports = function ( app){
    app.get('/page', (req, res, next)=>{
        res.send('Hello World!');
      });
     }