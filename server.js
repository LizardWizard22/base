// IMPORTS
// ============================================================================
const validate = require('./services/validate');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const pjson = require('./package.json');
const debug = require('debug')('app');
// CONFIG
// ============================================================================
require('./config/index')(app);
require('./routes/index')(app);
require('./error-handling/index')(app);
// SERVER INIT
// ============================================================================
app.listen(port, error => {
    if (error) {
        debug(error);
        return;
    }
    debug(`${pjson.name} v${pjson.version} is running on http://${process.env.SITE_HOST}:${port}`);
});