const express = require('express');
const cors = require('cors');
const colors = require('colors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/rating';

        this.middlewares();

        this.routes();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public'));
    }

    routes() {
        this.app.use( this.userPath, require('../routes/rating') );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running at ${this.port.blue} port`)
        });
    }
}

module.exports = Server;
