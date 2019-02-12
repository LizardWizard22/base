module.exports = function (app) {
    app.use((req, res) => {
        res.status(404);
        res.render('page', {
            'title': '404: Not Found',
            'content': 'The page you are looking for does not exist.',
            session: req.session.user
        });
    });

    app.use((error, req, res, next) => {
        res.status(500);
        res.render('page', {
            'title': '500: Internal Server Error',
            'content': 'Something went wrong on your server. Check your logs.',
            session: req.session.user
        });
        next(error);
    });
};